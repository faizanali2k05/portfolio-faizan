import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Jan 2024 – Present",
    title: "Senior Software Developer & Co-Founder",
    company: "5KASSI",
    location: "Multan, Pakistan",
    sector: "Information & Communication",
    description:
      "Co-founded a top-3 ranked digital marketing agency in Multan, leading the end-to-end development of high-performance web solutions and marketing automation tools.",
    link: "https://5kassi.com/",
    current: true,
  },
  {
    period: "Jan 2025 – Present",
    title: "Google Cloud Innovator",
    company: "Google Cloud",
    location: "California, United States",
    sector: "Technology",
    description:
      "A comprehensive, no-cost community program for developers, technical practitioners, and users of Google Cloud to learn, connect, and grow their cloud expertise.",
    link: "https://cloud.google.com/",
    current: true,
  },
  {
    period: "Jun 2024 – Present",
    title: "Manager",
    company: "Magsi Traders",
    location: "Multan, Pakistan",
    sector: "Transportation & Storage",
    description:
      "Managing international trade operations through a business partnership with Magsi Traders, overseeing logistics, supplier relations, and international trade processes.",
    link: "https://redchillipakistan.com/",
    current: true,
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative group"
    >
      <div
        className="p-8 relative overflow-hidden transition-all duration-500 group-hover:translate-y-[-4px]"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(212,175,55,0.15)",
        }}
      >
        {/* Gold accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
          style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "rgba(212,175,55,0.03)" }}
        />

        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(255,215,0,0.05))",
              border: "1px solid rgba(212,175,55,0.3)",
            }}
          >
            <Briefcase size={22} color="#D4AF37" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div>
                <h3
                  className="text-lg mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: "white" }}
                >
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37" }}
                  >
                    {exp.company}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.45)" }}
                  >
                    {exp.location}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    background: "rgba(212,175,55,0.1)",
                    color: "#D4AF37",
                    border: "1px solid rgba(212,175,55,0.2)",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.period}
                </span>
                {exp.current && (
                  <span
                    className="text-xs flex items-center gap-1.5"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "#4ade80", fontWeight: 500 }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }}
                    />
                    Current
                  </span>
                )}
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.55)", fontWeight: 300 }}
            >
              {exp.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <span
                className="text-xs px-3 py-1"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.4)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {exp.sector}
              </span>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs transition-all duration-300 hover:opacity-80"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 500 }}
              >
                Visit Website <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" style={{ background: "#050505", padding: "100px 0" }}>
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
            What I've Done
          </p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif", color: "white" }}>
            Work <span style={{ color: "#D4AF37" }}>Experience</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
            <div className="w-2 h-2 rotate-45" style={{ background: "#D4AF37" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company + exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
