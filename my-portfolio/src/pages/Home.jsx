import { Box, Typography, Stack, Button, Container, Avatar} from "@mui/material";
import profileImg from "../assets/Profile.png"

export default function Home() {
  return (
    <Box
      id="home"
      sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "#f4f4b3" }}
    >
      {/* Hero Section */}
      <Container
        maxWidth="md"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 8,
        }}
      >
        {/* Profile Image */}
        <Avatar
          alt="Sneha Gupta"
          src={profileImg}
          sx={{ width: 220, height: 250, mb: 3, boxShadow: 3 }}
        />

        {/* Text */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Hi, I'm Sneha Gupta
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            sx={{ mb: 4 }}
          >
            Full Stack Developer & Problem Solver
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: "center" }}>
            <Button
            href="/resume.pdf"
            download="Sneha_Gupta_Resume.pdf"
            sx={{
             background: "linear-gradient(90deg, #f87769, #8d77d1)",      // your custom color
             color: "white",                   // text color
             fontWeight: "bold",
             "&:hover": {
             background: "linear-gradient(90deg, #8d77d1, #f87769)",    // hover color
             transform: "scale(1.05)",
             transition: "all 0.3s ease",
             },
             py: 1.5,
             px: 3,
             }}
            >
              Download Resume
            </Button>


            <Button
              href="https://github.com/Student-Sneha09"
              target="_blank"
              variant="outlined"
              sx={{
               backgroundColor: "#f87769",      // your custom color
               color: "white",                   // text color
               fontWeight: "bold",
               "&:hover": {
               backgroundColor: "#8d77d1",    // hover color
               transform: "scale(1.05)",
               transition: "all 0.3s ease",
               },
               py: 1.5,
               px: 3,
              }}
             >
              GitHub
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
