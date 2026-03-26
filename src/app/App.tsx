import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Networks } from "./components/Networks";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#050505", color: "white", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Networks />
      <Contact />
      <Footer />

      {/* Global styles for placeholder colors */}
      <style>{`
        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.2) !important;
          font-family: 'Montserrat', sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
