import ProjectCard from "../components/ProjectCard";
import { Box, Typography } from "@mui/material";

const projects = [
  {
    title: "Baba Footwear",
    desc: "A full-stack E-commerce web app built using Django (backend) and HTML,CSS,JS (frontend). Features include handling routing, product display, and user interaction.",
    tech: ["Django", "React", "HTML", "CSS", "JS"],
    liveUrl: "#",
    repoUrl: "https://github.com/Student-Sneha09/Baba-Footwear-Backend",
  },
  {
    title: "Placomm - Placement Portal",
    desc: "Built the Training Officer frontend module using React & Material UI in a team setup. Collaborated via GitHub, creating dynamic forms and interactive components for real-time portal usage.",
    tech: ["React", "Material UI"],
    liveUrl: "#",
    repoUrl: "https://github.com/ayushanand960/PlaComm",
  },
  {
    title: "Bridora",
    desc: "Developed a responsive React & Material UI e-commerce site with multi-page routing and interactive contact form. Focused on modern UI/UX design for smooth navigation and user-friendly interface.",
    tech: ["React", "Material UI"],
    liveUrl: "#",
    repoUrl: "https://github.com/Student-Sneha09/Bridora-Ecommerce",
  },
];

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        p: 5,
        textAlign: "center",
        color: "white",
        background: "linear-gradient(270deg, #c1acfeff, #fab4adff, #fbaae8ff)",
        backgroundSize: "600% 600%",
        animation: "gradientMove 10s ease infinite",
        "@keyframes gradientMove": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 5, textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}
      >
        My Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {projects.map((project, idx) => (
          <Box
            key={idx}
            sx={{
              flex: "1 1 320px",
              maxWidth: "360px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProjectCard {...project} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
