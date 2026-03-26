import { Github, Linkedin, Globe, Mail, Phone } from "lucide-react";

const socials = [
  { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/faizanali2k05/", label: "LinkedIn" },
  { icon: <Globe size={16} />, href: "https://faizanali2k05.netlify.app/", label: "Website" },
  { icon: <Mail size={16} />, href: "mailto:faizanali15111511@gmail.com", label: "Email" },
  { icon: <Phone size={16} />, href: "https://wa.me/923085560981", label: "WhatsApp" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Networks", href: "#networks" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#030303", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p
              className="text-3xl mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: "white" }}
            >
              FA<span style={{ color: "#D4AF37" }}>.</span>
            </p>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
            >
              Software Developer & Cloud Engineer building high-performance digital solutions from Pakistan to the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 600 }}
            >
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm transition-colors duration-200 hover:opacity-80"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}
                    onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = "#D4AF37"; }}
                    onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)"; }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 600 }}
            >
              Connect With Me
            </p>
            <div className="flex gap-3 mb-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-300"
                  style={{
                    border: "1px solid rgba(212,175,55,0.2)",
                    color: "rgba(255,255,255,0.4)",
                    background: "rgba(212,175,55,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#D4AF37";
                    el.style.borderColor = "#D4AF37";
                    el.style.background = "rgba(212,175,55,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "rgba(255,255,255,0.4)";
                    el.style.borderColor = "rgba(212,175,55,0.2)";
                    el.style.background = "rgba(212,175,55,0.03)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:faizanali15111511@gmail.com"
              className="text-sm transition-colors duration-200"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}
            >
              faizanali15111511@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }} />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.2)", fontWeight: 300 }}
          >
            © {new Date().getFullYear()} Faizan Ali. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.2)", fontWeight: 300 }}
          >
            Crafted with{" "}
            <span style={{ color: "#D4AF37" }}>♥</span>{" "}
            in Multan, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
