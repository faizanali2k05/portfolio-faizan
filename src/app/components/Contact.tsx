import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Globe, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "faizanali15111511@gmail.com",
    href: "mailto:faizanali15111511@gmail.com",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "(+92) 308 5560981",
    href: "tel:+923085560981",
  },
  {
    icon: <MessageCircle size={18} />,
    label: "WhatsApp",
    value: "+92 308 5560981",
    href: "https://wa.me/923085560981",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Multan, Pakistan",
    href: null,
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/faizanali2k05",
    href: "https://www.linkedin.com/in/faizanali2k05/",
  },
  {
    icon: <Globe size={18} />,
    label: "Website",
    value: "faizanali2k05.netlify.app",
    href: "https://faizanali2k05.netlify.app/",
  },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xwpalbqp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (_) {}
    setSubmitting(false);
  };

  return (
    <section id="contact" style={{ background: "#080808", padding: "100px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
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
            Let's Connect
          </p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif", color: "white" }}>
            Get In <span style={{ color: "#D4AF37" }}>Touch</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
            <div className="w-2 h-2 rotate-45" style={{ background: "#D4AF37" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
          </div>
          <p
            className="mt-6 max-w-xl mx-auto text-sm leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.45)", fontWeight: 300 }}
          >
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities, creative ideas, or partnership possibilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div
              className="p-6 mb-2"
              style={{
                background: "rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 600 }}
              >
                Contact Details
              </p>
              <div className="flex flex-col gap-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(212,175,55,0.1)",
                        border: "1px solid rgba(212,175,55,0.2)",
                        color: "#D4AF37",
                      }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs mb-0.5"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          color: "rgba(255,255,255,0.3)",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontSize: "0.6rem",
                        }}
                      >
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs transition-colors duration-200"
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            color: "rgba(255,255,255,0.7)",
                            fontWeight: 400,
                          }}
                          onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "#D4AF37"; }}
                          onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; }}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p
                          className="text-xs"
                          style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.7)", fontWeight: 400 }}
                        >
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div
              className="p-5 flex items-center gap-4"
              style={{
                background: "rgba(74,222,128,0.04)",
                border: "1px solid rgba(74,222,128,0.15)",
              }}
            >
              <div className="relative">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#4ade80", boxShadow: "0 0 10px rgba(74,222,128,0.6)" }}
                />
                <div
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: "rgba(74,222,128,0.4)" }}
                />
              </div>
              <div>
                <p
                  className="text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: "#4ade80", fontWeight: 600 }}
                >
                  Available for Work
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
                >
                  Open to freelance & full-time roles
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div
              className="p-8 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
              />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, #C9A84C, #FFD700)" }}
                  >
                    <Send size={28} color="#050505" />
                  </div>
                  <h3
                    className="text-2xl mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: "white" }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.5)", fontWeight: 300 }}
                  >
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs transition-opacity hover:opacity-70"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 500 }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p
                    className="text-xs tracking-[0.3em] uppercase mb-6"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4AF37", fontWeight: 600 }}
                  >
                    Send a Message
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        className="block text-xs mb-2 tracking-wider uppercase"
                        style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}
                      >
                        Your Name
                      </label>
                      <input
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 text-sm outline-none transition-all duration-300"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(212,175,55,0.2)",
                          color: "white",
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.6)"; e.target.style.background = "rgba(212,175,55,0.04)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.2)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs mb-2 tracking-wider uppercase"
                        style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}
                      >
                        Email Address
                      </label>
                      <input
                        name="_replyto"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 text-sm outline-none transition-all duration-300"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(212,175,55,0.2)",
                          color: "white",
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.6)"; e.target.style.background = "rgba(212,175,55,0.04)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.2)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      className="block text-xs mb-2 tracking-wider uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}
                    >
                      Subject
                    </label>
                    <input
                      name="subject"
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-300"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(212,175,55,0.2)",
                        color: "white",
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.6)"; e.target.style.background = "rgba(212,175,55,0.04)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.2)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      className="block text-xs mb-2 tracking-wider uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 resize-none"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(212,175,55,0.2)",
                        color: "white",
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.6)"; e.target.style.background = "rgba(212,175,55,0.04)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.2)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-3 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg disabled:opacity-70"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      background: submitting ? "rgba(212,175,55,0.5)" : "linear-gradient(135deg, #C9A84C, #FFD700)",
                      color: "#050505",
                      fontWeight: 700,
                    }}
                  >
                    {submitting ? (
                      <>
                        <div
                          className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
                          style={{ borderColor: "rgba(5,5,5,0.4)", borderTopColor: "transparent" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
