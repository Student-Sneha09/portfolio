import { Box, Typography, Chip, Stack } from "@mui/material";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        p: 5,
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Me
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Motivated and detail-oriented BCA Student with a strong interest in Full Stack Development. 
Eager to build real-world experience and grow in the field of web development. Currently 
enhancing my understanding of Python, web technologies, and programming fundamentals.
      </Typography>

      {/* Technical Skills */}
      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
        Technical Skills
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 1, mb: 1 }}>
        Languages:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
        {["Python", "Java (Basics)", "C (Basics)", "PHP"].map(skill => (
          <Chip key={skill} label={skill}  sx={{ m: 0.5, bgcolor: "#8d77d1", color: "white", fontWeight: "bold",
            cursor: "pointer", // 👈 makes it look clickable
            transition: "all 0.3s ease", // smooth animation
            "&:hover": {
            bgcolor: "#f87769", // darker shade on hover
            transform: "scale(1.05)", // slightly enlarge
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" // subtle shadow
        } }} />
        ))}
      </Stack>

      <Typography variant="subtitle1" sx={{ mt: 1, mb: 1 }}>
        Web:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
        {["HTML", "CSS", "React JS"].map(skill => (
          <Chip key={skill} label={skill} sx={{ m: 0.5, bgcolor: "#8d77d1", color: "white", fontWeight: "bold",
            cursor: "pointer", // 👈 makes it look clickable
            transition: "all 0.3s ease", // smooth animation
            "&:hover": {
            bgcolor: "#f87769", // darker shade on hover
            transform: "scale(1.05)", // slightly enlarge
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" // subtle shadow
        } }} />
        ))}
      </Stack>

      <Typography variant="subtitle1" sx={{ mt: 1, mb: 1 }}>
        Tools:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
        {["Git", "GitHub", "VS Code"].map(skill => (
          <Chip key={skill} label={skill} sx={{ m: 0.5 , bgcolor: "#8d77d1", color: "white", fontWeight: "bold",
              cursor: "pointer", // 👈 makes it look clickable
            transition: "all 0.3s ease", // smooth animation
            "&:hover": {
            bgcolor: "#f87769", // darker shade on hover
            transform: "scale(1.05)", // slightly enlarge
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" // subtle shadow
        } }} />
        ))}
      </Stack>

      <Typography variant="subtitle1" sx={{ mt: 1, mb: 1 }}>
        Database:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
        {["MySQL (Basics)", "DBMS Concepts"].map(skill => (
          <Chip key={skill} label={skill} sx={{ m: 0.5, bgcolor: "#8d77d1", color: "white", fontWeight: "bold",
            cursor: "pointer", // 👈 makes it look clickable
            transition: "all 0.3s ease", // smooth animation
            "&:hover": {
            bgcolor: "#f87769", // darker shade on hover
            transform: "scale(1.05)", // slightly enlarge
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" // subtle shadow
        } }} />
        ))}
      </Stack>

      {/* Soft Skills */}
      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
        Soft Skills
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {["Communication", "Time Management", "Teamwork", "Adaptability", "Willingness to Learn"].map(skill => (
          <Chip key={skill} label={skill} sx={{ m: 0.5, bgcolor: "#f87769", color: "white", fontWeight: "bold",
              cursor: "pointer", // 👈 makes it look clickable
            transition: "all 0.3s ease", // smooth animation
            "&:hover": {
            bgcolor: "#8d77d1", // darker shade on hover
            transform: "scale(1.05)", // slightly enlarge
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" // subtle shadow
        } }} />
        ))}
      </Stack>
    </Box>
  );
}
