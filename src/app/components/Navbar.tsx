import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Networks", href: "#networks" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActive(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive("Contact");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/95 backdrop-blur-md shadow-[0_4px_30px_rgba(201,168,76,0.15)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("Home", "#home"); }}
            className="font-playfair text-2xl text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            FA<span style={{ color: "#D4AF37" }}>.</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.label, link.href)}
                  className="relative text-sm tracking-widest uppercase transition-colors duration-300 group"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: active === link.label ? "#D4AF37" : "rgba(255,255,255,0.75)",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{
                      width: active === link.label ? "100%" : "0%",
                      background: "linear-gradient(90deg, #D4AF37, #FFD700)",
                    }}
                  />
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{
                      width: "0%",
                      background: "linear-gradient(90deg, #D4AF37, #FFD700)",
                      opacity: active === link.label ? 0 : 1,
                    }}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:shadow-lg"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              background: "linear-gradient(135deg, #C9A84C, #FFD700)",
              color: "#0a0a0a",
              fontWeight: 700,
              clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
              cursor: "pointer",
            }}
          >
            Hire Me
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} color="#D4AF37" /> : <Menu size={24} color="#D4AF37" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col pt-24 pb-8 px-8"
            style={{ background: "rgba(5,5,5,0.98)", backdropFilter: "blur(20px)" }}
          >
            <ul className="flex flex-col gap-6 mt-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => handleNavClick(link.label, link.href)}
                    className="text-3xl transition-colors duration-300"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: active === link.label ? "#D4AF37" : "rgba(255,255,255,0.8)",
                    }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-8 py-3 text-sm tracking-widest uppercase"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  background: "linear-gradient(135deg, #C9A84C, #FFD700)",
                  color: "#0a0a0a",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}