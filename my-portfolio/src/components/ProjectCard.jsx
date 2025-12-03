import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";

export default function ProjectCard({ title, desc, tech, liveUrl, repoUrl }) {
  return (
    <Card
      sx={{
        height: 270,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom color="#5e35b1">
          {title}
        </Typography>

        <Typography variant="body2" sx={{ mb: 2, color: "#333" }}>
          {desc}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {tech.map((t, idx) => (
            <Chip
              key={idx}
              label={t}
              size="small"
              sx={{
                mt: 0.5,
                bgcolor: "#ede7f6",
                color: "#5e35b1",
                fontWeight: 600,
                "&:hover": { bgcolor: "#d1c4e9" },
              }}
            />
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        {repoUrl && (
          <Button
            size="small"
            variant="contained"
            href={repoUrl}
            target="_blank"
            sx={{
              background: "linear-gradient(90deg, #f87769, #8d77d1)",
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(90deg, #8d77d1, #f87769)",
              },
            }}
          >
            Github
          </Button>
        )}
        {/* {repoUrl && (
          <Button
            size="small"
            variant="outlined"
            href={repoUrl}
            target="_blank"
            sx={{
              color: "#8d77d1",
              borderColor: "#8d77d1",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#f3e5f5" },
            }}
          >
            GitHub
          </Button> 
           )} */}
      </CardActions>
    </Card>
  );
}
