import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, ExternalLink } from "lucide-react";

const educations = [
  {
    period: "Oct 2023 – Present",
    degree: "Bachelor's in Computer Science",
    institution: "Air University Islamabad, Multan Campus",
    location: "Islamabad / Multan, Pakistan",
    field: "Information and Communication Technologies",
    eqf: "EQF Level 6",
    link: "https://aumc.edu.pk/",
    current: true,
    color: "#D4AF37",
  },
  {
    period: "Completed",
    degree: "Advanced Web Application Developer",
    institution: "NAVTTC Pakistan",
    location: "Multan, Pakistan",
    field: "Information and Communication Technologies",
    eqf: "EQF Level 5",
    link: "https://navttc.gov.pk/",
    current: false,
    color: "#D4AF37",
  },
  {
    period: "Feb 2024 – Jan 2026",
    degree: "English Access Microscholarship Program",
    institution: "U.S. Department of State",
    location: "Multan, Pakistan",
    field: "Arts and Humanities",
    eqf: "EQF Level 4",
    link: "https://exchanges.state.gov/",
    current: false,
    color: "#D4AF37",
  },
  {
    period: "Sep 2021 – May 2023",
    degree: "Intermediate / A-Level",
    institution: "KIPS College Multan Campus",
    location: "Multan, Pakistan",
    field: "Engineering, Manufacturing and Construction",
    eqf: "EQF Level 3",
    link: "https://kips.edu.pk/",
    current: false,
    color: "#D4AF37",
  },
  {
    period: "Jan 2016 – Jun 2021",
    degree: "Matriculation / O-Level",
    institution: "Zamir Public School Multan",
    location: "Multan, Pakistan",
    field: "Natural Sciences, Mathematics and Statistics",
    eqf: "EQF Level 2",
    link: "https://zamirpublicschool.edu.pk/",
    current: false,
    color: "#D4AF37",
  },
];

function EduCard({ edu, index }: { edu: typeof educations[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="flex gap-6 group"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center z-10 relative"
          style={{
            background: "linear-gradient(135deg, #C9A84C, #FFD700)",
            boxShadow: "0 0 20px rgba(212,175,55,0.4)",
          }}
        >
          <GraduationCap size={18} color="#050505" />
        </div>
        {index < educations.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: "linear-gradient(180deg, rgba(212,175,55,0.4), rgba(212,175,55,0.05))", minHeight: "40px" }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 pb-8 p-6 relative overflow-hidden transition-all duration-400 group-hover:translate-y-[-2px]"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(212,175,55,0.12)",
          marginBottom: index < educations.length - 1 ? "0" : "0",
        }}
      >
        <div
          className="absolute top-0 left-0 w-1 h-full"
          style={{ background: "linear-gradient(180deg, #D4AF37, transparent)" }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: "rgba(212,175,55,0.02)" }}
        />

        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3
              className="text-base mb-1"
              style={{ fontFamily: "'Playfair Display', serif", color: "white" }}
            >
              {edu.degree}
            </h3>
            <p
              className="text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 500 }}
            >
              {edu.institution}
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
              {edu.period}
            </span>
            {edu.current && (
              <span
                className="text-xs flex items-center gap-1.5"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#4ade80", fontWeight: 500 }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
                Current
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-3">
          <span
            className="text-xs"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.4)" }}
          >
            📍 {edu.location}
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
          <span
            className="text-xs px-2 py-0.5"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "rgba(255,255,255,0.4)",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {edu.eqf}
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
          <span
            className="text-xs"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.35)" }}
          >
            {edu.field}
          </span>
          <a
            href={edu.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs transition-opacity duration-200 hover:opacity-70 ml-auto"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 500 }}
          >
            Visit <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" style={{ background: "#080808", padding: "100px 0" }}>
      <div className="max-w-4xl mx-auto px-6">
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
            Academic Background
          </p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif", color: "white" }}>
            Education &{" "}
            <span style={{ color: "#D4AF37" }}>Training</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
            <div className="w-2 h-2 rotate-45" style={{ background: "#D4AF37" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col">
          {educations.map((edu, i) => (
            <EduCard key={edu.degree + edu.institution} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
