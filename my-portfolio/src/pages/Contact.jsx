import { useState } from "react";
import { Box, Typography, Stack, Button, TextField, Container, IconButton, Snackbar, Alert } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  const [open, setOpen] = useState(false);  // Snackbar open state
  const [success, setSuccess] = useState(true); // track success or error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mblzyknw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        setSuccess(true);
        setOpen(true);    // show snackbar
        e.target.reset();
      } else {
        setSuccess(false);
        setOpen(true);
      }
    } catch (error) {
      setSuccess(false);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        py: 8,
        bgcolor: "#f4f4b3",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
      }}
    >
      {/* Snackbar at top */}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={success ? "success" : "error"} sx={{ width: '100%' }}>
          {success ? "Your form has been submitted successfully!" : "Oops! Something went wrong."}
        </Alert>
      </Snackbar>

      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          Contact Me
        </Typography>
        <Typography sx={{ mb: 5, textAlign: "center" }}>
          You can reach me via email or connect on GitHub/LinkedIn.
        </Typography>

        {/* Social Icons */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 5 }}>
          <IconButton color="inherit" component="a" href="mailto:sg23661352@gmail.com" target="_blank" sx={{ bgcolor: "#f87769", color: "white", '&:hover': { bgcolor: "#8d77d1", transform: "scale(1.2)" }, transition: "all 0.3s ease" }}>
            <EmailIcon />
          </IconButton>
          <IconButton color="inherit" component="a" href="https://github.com/Student-Sneha09" target="_blank" sx={{ bgcolor: "#f87769", color: "white", '&:hover': { bgcolor: "#8d77d1", transform: "scale(1.2)" }, transition: "all 0.3s ease" }}>
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/sneha-gupta-22a7a92b1" target="_blank" sx={{ bgcolor: "#f87769", color: "white", '&:hover': { bgcolor: "#8d77d1", transform: "scale(1.2)" }, transition: "all 0.3s ease" }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField label="Name" name="name" variant="outlined" fullWidth sx={{ bgcolor: "white", borderRadius: 2, input: { color: "black" } }} required />
            <TextField label="Email" name="email" type="email" variant="outlined" fullWidth sx={{ bgcolor: "white", borderRadius: 2, input: { color: "black" } }} required />
            <TextField label="Message" name="message" variant="outlined" fullWidth multiline rows={5} sx={{ bgcolor: "white", borderRadius: 2, input: { color: "black" } }} required />

            <Button type="submit" sx={{ py: 1.5, background: "linear-gradient(90deg, #f87769, #8d77d1)", color: " rgba(0, 0, 0, 0.81)", fontWeight: "bold", transition: "all 0.3s ease", "&:hover": { transform: "scale(1.05)", background: "linear-gradient(90deg, #8d77d1, #f87769)", color: "white", boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" } }}>
              Send
            </Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
}
