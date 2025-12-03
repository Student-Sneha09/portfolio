import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", background: "linear-gradient(90deg, #8d77d1, #f87769)"}}>
        <Typography variant="h6" sx={{ fontWeight: "bold"}}>
          Sneha's Portfolio 
        </Typography>
        <Box>
          <Button color="inherit" component={ScrollLink} to="home" smooth duration={500} offset={-70}>Home</Button>
          <Button color="inherit" component={ScrollLink} to="about" smooth duration={500} offset={-70}>About</Button>
          <Button color="inherit" component={ScrollLink} to="projects" smooth duration={500} offset={-70}>Projects</Button>
          <Button color="inherit" component={ScrollLink} to="certifications" smooth duration={500} offset={-70}>Certifications</Button>
          <Button color="inherit" component={ScrollLink} to="contact" smooth duration={500} offset={-70}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
