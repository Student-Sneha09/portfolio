import React from "react";
import { Box, Typography, Grid, Button, Card, CardContent } from "@mui/material";

const certifications = [
  {
    title: "Learnex – Internship Certificate",
    date: "0ctober 2024 to December 2024",
    file: "/certificates/learnex_internship.jpeg",
  },
  {
    title: "Learnex – Training Certificate",
    date: "0ctober 2024 to December 2024",
    file: "/certificates/learnex_training.jpeg",
  },
  {
    title: "Learnex – Excellence Certificate",
    date: "0ctober 2024 to December 2024",
    file: "/certificates/learnex_excellence.jpeg",
  },
  {
    title: "HP Computer – Java + Android Internship",
    date: "Feburary 2025",
    file: "/certificates/hp_java_android.pdf",
  },
  {
    title: "NPTEL – Programming in Java",
    date: "July 2024 to October 2024",
    file: "/certificates/nptel_java.pdf",
  },
  {
    title: "Internship Studio – Participation Certificate",
    date: "May 2024",
    file: "/certificates/internship_studio_test.pdf",
  },
  {
    title: "GUVI – Webpage Creation Workshop",
    date: "September 2024",
    file: "/certificates/guvi_webpage.png",
  },
  {
    title: "WiseLearnz – RPA Workshop",
    date: "September 2024",
    file: "/certificates/wiselearnz_rpa_workshop.pdf",
  },
  {
    title: "Rama Univ – Coding Contest (Runner-up)",
    date: "September 2024",
    file: "/certificates/rama_coding.pdf",
  },
  {
    title: "Rama Univ – Debate Participation",
    date: "September 2024",
    file: "/certificates/rama_debate.pdf",
  },
  {
    title: "Rama Univ – Volunteer (ICAR-24)",
    date: "November 2024",
    file: "/certificates/rama_volunteer_icar.pdf",
  },
];

const Certifications = () => {
  return (
    <Box 
    id="certifications"
    sx={{ textAlign: "center", py: 6 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          fontWeight: "bold",
          color: "#b56576",
        }}
      >
        My Certifications
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-5px)" },
                height: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#333",
                    fontSize: "1.05rem",
                    mb: 2,
                  }}
                >
                  {cert.title}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    color: "#5b555add",
                    fontSize: "1.05rem",
                    mb: 2,
                  }}
                >
                  {cert.date}
                </Typography>

                <Button
                  variant="contained"
                  href={cert.file}
                  target="_blank"
                  sx={{
                    background: "linear-gradient(90deg, #FF6B6B, #A66DD4)",
                    color: "white",
                    fontWeight: 600,
                    borderRadius: "10px",
                    textTransform: "uppercase",
                    "&:hover": {
                      background: "linear-gradient(90deg, #A66DD4, #FF6B6B)",
                    },
                  }}
                >
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certifications;
