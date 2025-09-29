import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "../assets/styles/Contact.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ open: false, ok: true, msg: "" });

  const validate = () => {
    const nameErr = name.trim() === "";
    const emailErr = email.trim() === "";
    const msgErr = message.trim() === "";
    setNameError(nameErr);
    setEmailError(emailErr);
    setMessageError(msgErr);
    return !(nameErr || emailErr || msgErr);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);

      // Direct EmailJS call - completely safe with public keys
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            template_params: {
              from_name: name,
              reply_to: email,
              message: message,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Email send failed");
      }

      setToast({
        open: true,
        ok: true,
        msg: "Message sent! I'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setToast({
        open: true,
        ok: false,
        msg: "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const fieldSx = (theme: any) => ({
    "& .MuiOutlinedInput-root": {
      bgcolor: "background.paper",
      position: "relative",
      zIndex: 1,
    },
    "& .MuiOutlinedInput-input, & .MuiInputBase-inputMultiline, & textarea": {
      color: "text.primary",
      caretColor: theme.palette.text.primary,
    },
  });

  return (
    <div id="contact">
      <Box
        sx={{ mx: "auto", maxWidth: 720, width: "100%", px: { xs: 2, md: 0 } }}
      >
        <div className="contact_wrapper">
          <h1 className="section-title contact">Contact Me</h1>
          <p>Let's keep in touch!</p>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={sendEmail}
            sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
              }}
            >
              <TextField
                required
                fullWidth
                variant="outlined"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                sx={fieldSx}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
                sx={fieldSx}
              />
            </Box>

            <TextField
              required
              fullWidth
              variant="outlined"
              placeholder="Your message!"
              multiline
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              sx={fieldSx}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send"}
              </Button>
            </Box>
          </Box>

          <Snackbar
            open={toast.open}
            autoHideDuration={4000}
            onClose={() => setToast({ ...toast, open: false })}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              severity={toast.ok ? "success" : "error"}
              onClose={() => setToast({ ...toast, open: false })}
              variant="filled"
            >
              {toast.msg}
            </Alert>
          </Snackbar>
        </div>
      </Box>
    </div>
  );
}

export default Contact;
