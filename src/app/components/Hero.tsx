import { motion } from "motion/react";
import { Github, Linkedin, Globe, Phone, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "../../assets/c2b8464771efb857caff86cb105bd7bef12aeaa5.png";

const socials = [
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/faizanali2k05/", label: "LinkedIn" },
  { icon: <Globe size={18} />, href: "https://faizanali2k05.netlify.app/", label: "Website" },
  { icon: <Github size={18} />, href: "https://github.com/", label: "GitHub" },
  { icon: <Mail size={18} />, href: "mailto:faizanali15111511@gmail.com", label: "Email" },
  { icon: <Phone size={18} />, href: "https://wa.me/923085560981", label: "WhatsApp" },
];

export function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 rounded-full blur-3xl opacity-20"
        style={{ width: "500px", height: "500px", background: "radial-gradient(circle, #D4AF37, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 rounded-full blur-3xl opacity-10"
        style={{ width: "400px", height: "400px", background: "radial-gradient(circle, #D4AF37, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 justify-center lg:justify-start mb-4"
          >
            <span className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
            <span
              className="text-sm tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 500 }}
            >
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ fontFamily: "'Playfair Display', serif", color: "white" }}
            className="text-5xl sm:text-6xl lg:text-7xl mb-2"
          >
            Faizan
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              background: "linear-gradient(135deg, #C9A84C 0%, #FFD700 50%, #C9A84C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="text-5xl sm:text-6xl lg:text-7xl mb-6"
          >
            Ali
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6"
          >
            <p
              className="text-lg sm:text-xl tracking-wide"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.6)", fontWeight: 300 }}
            >
              Software Developer &{" "}
              <span style={{ color: "#D4AF37", fontWeight: 500 }}>Cloud Engineer</span>
            </p>
            <p
              className="text-sm tracking-wider mt-1"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}
            >
              Co-Founder @ 5KASSI · Google Cloud Innovator · Pakistan
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-px mx-auto lg:mx-0 mb-6"
            style={{ background: "linear-gradient(90deg, #D4AF37, transparent)", transformOrigin: "left" }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="max-w-md mx-auto lg:mx-0 mb-10 text-sm leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.55)", fontWeight: 300 }}
          >
            Passionate software developer and co-founder with expertise in high-performance web solutions,
            cloud engineering, and digital innovation. Building tomorrow's tech from Pakistan to the world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                background: "linear-gradient(135deg, #C9A84C, #FFD700)",
                color: "#050505",
                fontWeight: 700,
                clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
              }}
            >
              Get In Touch
            </a>
            <a
              href="#experience"
              onClick={(e) => { e.preventDefault(); document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "#D4AF37",
                fontWeight: 600,
                border: "1px solid rgba(212,175,55,0.4)",
                clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
              }}
            >
              View Work
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  border: "1px solid rgba(212,175,55,0.3)",
                  color: "rgba(255,255,255,0.6)",
                  background: "rgba(212,175,55,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#D4AF37";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#D4AF37";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,175,55,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,175,55,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,175,55,0.05)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative order-1 lg:order-2 flex-shrink-0"
        >
          {/* Rotating ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #D4AF37, transparent, #D4AF37, transparent, #D4AF37)",
              padding: "2px",
              animation: "spin 8s linear infinite",
            }}
          />

          {/* Outer glow ring */}
          <div
            className="absolute -inset-4 rounded-full opacity-30 blur-xl"
            style={{ background: "radial-gradient(circle, #D4AF37, transparent 70%)" }}
          />

          {/* Image container */}
          <div
            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
            style={{
              border: "3px solid",
              borderColor: "#D4AF37",
              boxShadow: "0 0 40px rgba(212,175,55,0.4), inset 0 0 40px rgba(212,175,55,0.05)",
            }}
          >
            <img
              src={profilePhoto}
              alt="Faizan Ali"
              className="w-full h-full object-cover object-top"
              style={{ filter: "contrast(1.05) brightness(0.95)" }}
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(to bottom, transparent 60%, rgba(5,5,5,0.3) 100%)",
              }}
            />
          </div>

          {/* Floating badge - Google Cloud */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute -right-4 top-8 px-3 py-2 rounded"
            style={{
              background: "rgba(5,5,5,0.9)",
              border: "1px solid rgba(212,175,55,0.4)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="text-xs" style={{ color: "#D4AF37", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, whiteSpace: "nowrap" }}>
              ☁ Google Cloud
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Montserrat', sans-serif" }}>Innovator</p>
          </motion.div>

          {/* Floating badge - Co-Founder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute -left-4 bottom-10 px-3 py-2 rounded"
            style={{
              background: "rgba(5,5,5,0.9)",
              border: "1px solid rgba(212,175,55,0.4)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="text-xs" style={{ color: "#D4AF37", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, whiteSpace: "nowrap" }}>
              🚀 Co-Founder
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Montserrat', sans-serif" }}>5KASSI Agency</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem" }}>
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} color="#D4AF37" />
        </motion.div>
      </motion.button>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
