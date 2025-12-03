import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certification";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}
