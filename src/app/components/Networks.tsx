import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, ExternalLink, Award, Shield } from "lucide-react";

const memberships = [
  {
    period: "Jan 2025 – Jan 2026",
    role: "AIESEC Member",
    org: "AIESEC",
    subtitle: "Marketing & PR / Outgoing Global Volunteer",
    location: "Pakistan",
    description:
      "Spent two years driving organizational growth, first by managing public relations and digital marketing strategies, then by facilitating international volunteer exchanges in the OGV department. Successfully bridged the gap between local talent and global opportunities while enhancing brand visibility and stakeholder engagement.",
    link: "https://www.instagram.com/p/DH_KvIUIgx9/?igsh=MTZvaGgwaHRjdW44OA==",
    icon: <Users size={20} />,
    current: false,
  },
  {
    period: "Mar 2026 – Present",
    role: "Co-Founder",
    org: "Youth Awareness Network (YAN)",
    subtitle: "Youth Empowerment & International Outreach",
    location: "Multan, Pakistan",
    description:
      "Co-established a youth-centric organization dedicated to empowering students through global exposure and mentorship on international exchange programs and scholarship opportunities. Design and lead initiatives to bridge the information gap, providing youth with the necessary tools and networks to access competitive global platforms and professional development.",
    link: "https://www.instagram.com/youthawarenessnetwork?igsh=ajBvdTZudGQ1aW01",
    icon: <Award size={20} />,
    current: true,
  },
];

const conferences = [
  {
    period: "18–20 Sep 2024",
    title: "Digital Pakistan Cybersecurity Hackathon Workshop",
    location: "Multan, Pakistan",
    link: "https://drive.google.com/file/d/14x0QLTILkmDB97gUZWeifyegBZzsD_0-/view?usp=drive_link",
    icon: <Shield size={20} />,
  },
];

const languages = [
  {
    language: "Urdu",
    level: "Native",
    skills: { listening: "Native", reading: "Native", speaking: "Native", writing: "Native" },
    pct: 100,
  },
  {
    language: "English",
    level: "Elementary (A2)",
    skills: { listening: "A2", reading: "A2", speaking: "A1", writing: "A2" },
    pct: 30,
  },
];

function MembershipCard({ m, index }: { m: typeof memberships[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden transition-all duration-400 hover:translate-y-[-4px]"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(212,175,55,0.15)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: "rgba(212,175,55,0.02)" }}
      />

      <div className="p-7">
        <div className="flex items-start gap-5">
          <div
            className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(255,215,0,0.05))",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#D4AF37",
            }}
          >
            {m.icon}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="text-base mb-0.5" style={{ fontFamily: "'Playfair Display', serif", color: "white" }}>
                  {m.role}
                </h3>
                <p className="text-sm" style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 600 }}>
                  {m.org}
                </p>
                <p className="text-xs mt-0.5" style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.4)" }}>
                  {m.subtitle}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span
                  className="text-xs px-3 py-1"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    background: "rgba(212,175,55,0.08)",
                    color: "#D4AF37",
                    border: "1px solid rgba(212,175,55,0.2)",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {m.period}
                </span>
                {m.current && (
                  <span className="text-xs flex items-center gap-1.5" style={{ fontFamily: "'Montserrat', sans-serif", color: "#4ade80", fontWeight: 500 }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
                    Active
                  </span>
                )}
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mt-3 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.5)", fontWeight: 300 }}
            >
              {m.description}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs" style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.35)" }}>
                📍 {m.location}
              </span>
              <a
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs transition-opacity duration-200 hover:opacity-70 ml-auto"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 500 }}
              >
                View Post <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Networks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="networks" style={{ background: "#050505", padding: "100px 0" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
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
            Community & Impact
          </p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif", color: "white" }}>
            Networks &{" "}
            <span style={{ color: "#D4AF37" }}>Memberships</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
            <div className="w-2 h-2 rotate-45" style={{ background: "#D4AF37" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
          </div>
        </motion.div>

        {/* Memberships */}
        <div className="flex flex-col gap-6 mb-16">
          {memberships.map((m, i) => (
            <MembershipCard key={m.org + m.role} m={m} index={i} />
          ))}
        </div>

        {/* Conferences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 600 }}
          >
            Conferences & Seminars
          </p>
          {conferences.map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-5 p-6 group"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(212,175,55,0.12)",
              }}
            >
              <div
                className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(212,175,55,0.1)",
                  border: "1px solid rgba(212,175,55,0.25)",
                  color: "#D4AF37",
                }}
              >
                {c.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-base mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "white" }}>
                  {c.title}
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-xs" style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 500 }}>
                    {c.period}
                  </span>
                  <span className="text-xs" style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.35)" }}>
                    📍 {c.location}
                  </span>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs ml-auto transition-opacity hover:opacity-70"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 500 }}
                  >
                    Certificate <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Language Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 600 }}
          >
            Language Skills
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {languages.map((lang) => (
              <div
                key={lang.language}
                className="p-6"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(212,175,55,0.12)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg" style={{ fontFamily: "'Playfair Display', serif", color: "white" }}>
                    {lang.language}
                  </h4>
                  <span
                    className="text-xs px-3 py-1"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      background: lang.pct === 100 ? "rgba(212,175,55,0.15)" : "rgba(212,175,55,0.08)",
                      color: "#D4AF37",
                      border: "1px solid rgba(212,175,55,0.2)",
                      fontWeight: 600,
                    }}
                  >
                    {lang.level}
                  </span>
                </div>
                <div className="h-1.5 rounded-full mb-4" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${lang.pct}%`,
                      background: "linear-gradient(90deg, #C9A84C, #FFD700)",
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(lang.skills).map(([skill, value]) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span
                        className="text-xs capitalize"
                        style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.35)" }}
                      >
                        {skill}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          background: "rgba(212,175,55,0.06)",
                          color: "rgba(212,175,55,0.8)",
                          border: "1px solid rgba(212,175,55,0.1)",
                          fontWeight: 500,
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
