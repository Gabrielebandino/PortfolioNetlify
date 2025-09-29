// netlify/functions/send-email.js
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Missing fields" }),
      };
    }

    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    // Accept either PUBLIC or PRIVATE key; use whichever you set
    const USER_KEY =
      process.env.EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PRIVATE_KEY;

    const missing = [];
    if (!SERVICE_ID) missing.push("EMAILJS_SERVICE_ID");
    if (!TEMPLATE_ID) missing.push("EMAILJS_TEMPLATE_ID");
    if (!USER_KEY) missing.push("EMAILJS_PUBLIC_KEY/EMAILJS_PRIVATE_KEY");
    if (missing.length) {
      console.error("Missing env vars:", missing.join(", "));
      return {
        statusCode: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "Email service not configured",
          missing,
        }),
      };
    }

    // EmailJS REST API
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: USER_KEY, // public OR private key works here
        template_params: {
          from_name: name,
          reply_to: email,
          message,
        },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("EmailJS error:", res.status, text);
      return {
        statusCode: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Email send failed", details: text }),
      };
    }

    return {
      statusCode: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true }),
    };
  } catch (e) {
    console.error("Server error:", e);
    return {
      statusCode: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Server error", details: e.message }),
    };
  }
};
