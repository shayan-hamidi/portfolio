import "./index.css";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
// import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Particle from "./components/particle/Particle";
import Dialog from "./components/dialog/Dialog";
import { useEffect, useState } from "react";
function App() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Particle />
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      {open && <Dialog setOpen={setOpen} />}
    </>
  );
}

export default App;
