import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Mail, Phone, Globe, MessageCircle } from "lucide-react";

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "3", label: "Companies Founded/Led" },
  { number: "Top 3", label: "Agency Ranking" },
  { number: "Global", label: "Cloud Innovator" },
];

const skills = [
  { label: "Web Development", pct: 92 },
  { label: "Cloud Engineering", pct: 85 },
  { label: "Digital Marketing", pct: 80 },
  { label: "Project Management", pct: 78 },
  { label: "UI/UX Design", pct: 70 },
];

function SkillBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm" style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
          {label}
        </span>
        <span className="text-sm" style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 600 }}>
          {pct}%
        </span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
        <motion.div
          className="h-1.5 rounded-full"
          style={{ background: "linear-gradient(90deg, #C9A84C, #FFD700)" }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

const contacts = [
  { icon: <MapPin size={16} />, label: "Location", value: "Multan, Pakistan" },
  { icon: <Mail size={16} />, label: "Email", value: "faizanali15111511@gmail.com", href: "mailto:faizanali15111511@gmail.com" },
  { icon: <Phone size={16} />, label: "Phone", value: "(+92) 308 5560981", href: "tel:+923085560981" },
  { icon: <Globe size={16} />, label: "Website", value: "faizanali2k05.netlify.app", href: "https://faizanali2k05.netlify.app/" },
  { icon: <MessageCircle size={16} />, label: "WhatsApp", value: "+92 308 5560981", href: "https://wa.me/923085560981" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ background: "#080808", padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 600 }}
          >
            Get To Know Me
          </p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif", color: "white" }}>
            About <span style={{ color: "#D4AF37" }}>Me</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
            <div className="w-2 h-2 rotate-45" style={{ background: "#D4AF37" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="p-8 rounded-sm mb-8 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              <div
                className="absolute top-0 left-0 w-16 h-16"
                style={{
                  background: "linear-gradient(135deg, rgba(212,175,55,0.3) 0%, transparent 100%)",
                }}
              />
              <p
                className="text-base leading-loose mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.65)", fontWeight: 300 }}
              >
                I'm a passionate Software Developer & Cloud Engineer based in Multan, Pakistan. I co-founded
                <span style={{ color: "#D4AF37", fontWeight: 500 }}> 5KASSI</span>, a top-3 ranked digital marketing
                agency, leading end-to-end development of high-performance web solutions and marketing automation tools.
              </p>
              <p
                className="text-base leading-loose"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.65)", fontWeight: 300 }}
              >
                As a <span style={{ color: "#D4AF37", fontWeight: 500 }}>Google Cloud Innovator</span>, I'm dedicated to
                leveraging cloud technologies to build scalable, impactful solutions. I also manage international trade
                partnerships and champion youth empowerment through the Youth Awareness Network.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 gap-3">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37" }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.35)", fontWeight: 500, letterSpacing: "0.1em" }}>
                      {c.label.toUpperCase()}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors duration-200 hover:opacity-80"
                        style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.8)", fontWeight: 400 }}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.8)", fontWeight: 400 }}>
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="p-6 text-center relative overflow-hidden group"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(212,175,55,0.15)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "rgba(212,175,55,0.04)" }}
                  />
                  <p
                    className="text-3xl mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      background: "linear-gradient(135deg, #C9A84C, #FFD700)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.number}
                  </p>
                  <p className="text-xs tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div
              className="p-8"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 600 }}
              >
                Core Skills
              </p>
              {skills.map((s, i) => (
                <SkillBar key={s.label} label={s.label} pct={s.pct} delay={0.5 + i * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
