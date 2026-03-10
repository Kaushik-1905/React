import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@300;400;500&display=swap');

        .contact-page {
          min-height: 100vh;
          background: #000;
          color: #e5e5e5;
          font-family: 'Playfair Display', serif;
          overflow-x: hidden;
        }

        /* Hero */
        .contact-hero {
          position: relative;
          height: 45vh;
          display: flex;
          align-items: flex-end;
          padding: 60px;
          border-bottom: 1px solid #1a1a1a;
          overflow: hidden;
        }

        .contact-hero::before {
          content: 'CONTACT';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: clamp(60px, 15vw, 200px);
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1px #161616;
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: 0.1em;
        }

        .contact-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(128,0,128,0.08) 0%, transparent 70%);
          bottom: -300px;
          right: -200px;
          pointer-events: none;
        }

        .contact-glow-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%);
          top: -200px;
          left: -100px;
          pointer-events: none;
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
        }

        .contact-hero-content p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: gold;
          margin-bottom: 12px;
        }

        .contact-hero-content h1 {
          font-size: clamp(36px, 6vw, 72px);
          line-height: 1.1;
          font-weight: 600;
        }

        .gold-word {
          background: linear-gradient(90deg, gold, #fff2a8, goldenrod);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Two-col layout */
        .contact-body {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          min-height: 60vh;
        }

        /* Left info panel */
        .contact-info {
          padding: 80px 60px;
          border-right: 1px solid #1a1a1a;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .section-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: gold;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #1a1a1a;
        }

        .info-tagline h2 {
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 16px;
        }

        .info-tagline p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          line-height: 1.9;
          color: #777;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid #1e1e1e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: gold;
          flex-shrink: 0;
        }

        .info-item-text small {
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #555;
          display: block;
          margin-bottom: 4px;
        }

        .info-item-text span {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          color: #ccc;
        }

        /* Socials */
        .social-row {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border: 1px solid #1a1a1a;
          border-radius: 12px;
          text-decoration: none;
          color: #aaa;
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          letter-spacing: 1px;
          transition: 0.3s;
        }

        .social-link:hover {
          border-color: gold;
          color: gold;
        }

        /* Right form panel */
        .contact-form-wrap {
          padding: 80px 60px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #555;
          transition: 0.3s;
        }

        .field.is-focused label {
          color: gold;
        }

        .field input,
        .field select,
        .field textarea {
          background: #060606;
          border: 1px solid #1e1e1e;
          border-radius: 10px;
          padding: 14px 18px;
          color: #e5e5e5;
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          outline: none;
          transition: 0.3s;
          width: 100%;
        }

        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: rgba(255,215,0,0.4);
          background: #080808;
        }

        .field select option {
          background: #111;
        }

        .field textarea {
          resize: vertical;
          min-height: 130px;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 40px;
          border-radius: 40px;
          background: linear-gradient(90deg, gold, goldenrod);
          color: #000;
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          align-self: flex-start;
        }

        .submit-btn:hover {
          transform: scale(1.04);
        }

        /* Success */
        .success-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          text-align: center;
          gap: 20px;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, gold, goldenrod);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin-bottom: 8px;
        }

        .success-box h2 {
          font-size: 36px;
          font-weight: 600;
        }

        .success-box p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: #777;
          max-width: 400px;
        }

        /* Bottom CTA strip */
        .cta-strip {
          padding: 80px 60px;
          border-top: 1px solid #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 32px;
        }

        .cta-strip h3 {
          font-size: clamp(24px, 4vw, 48px);
          font-weight: 600;
          line-height: 1.2;
        }

        .cta-strip a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 40px;
          background: #fff;
          color: #000;
          font-weight: 700;
          text-decoration: none;
          font-size: 15px;
          transition: 0.3s;
          white-space: nowrap;
        }

        .cta-strip a:hover {
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          .contact-body {
            grid-template-columns: 1fr;
          }
          .contact-info {
            border-right: none;
            border-bottom: 1px solid #1a1a1a;
          }
          .contact-hero, .contact-info, .contact-form-wrap, .cta-strip {
            padding: 40px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="contact-page">
        {/* Hero */}
        <div className="contact-hero">
          <div className="contact-glow" />
          <div className="contact-glow-2" />
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>Get in Touch</p>
            <h1>
              Let's Build Something <br />
              <span className="gold-word">Iconic.</span>
            </h1>
          </motion.div>
        </div>

        {/* Body */}
        <div className="contact-body">
          {/* Left Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="section-label">Contact Info</div>

            <div className="info-tagline">
              <h2>Ready to create something <span className="gold-word">extraordinary?</span></h2>
              <p>
                Whether you have a fully-formed brief or just a spark of an idea —
                I'd love to hear from you. Let's talk.
              </p>
            </div>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail size={18} /></div>
                <div className="info-item-text">
                  <small>Email</small>
                  <span>kaushikdagaya1902@example.com</span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={18} /></div>
                <div className="info-item-text">
                  <small>Location</small>
                  <span>Available Worldwide · Remote</span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Clock size={18} /></div>
                <div className="info-item-text">
                  <small>Response Time</small>
                  <span>Within 24 hours</span>
                </div>
              </div>
            </div>

            <div>
              <div className="section-label" style={{ marginBottom: "16px" }}>Socials</div>
              <div className="social-row">
                {["LinkedIn", "GitHub", "Twitter / X"].map((s) => (
                  <a href="#" className="social-link" key={s}>
                    <span>{s}</span>
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="section-label" style={{ marginBottom: "40px" }}>Send a Message</div>

            {sent ? (
              <motion.div
                className="success-box"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon">✦</div>
                <h2>Message <span className="gold-word">Received.</span></h2>
                <p>Thank you, {form.name}. I'll be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <div className="contact-form">
                <div className="form-row">
                  <div className={`field ${focused === "name" ? "is-focused" : ""}`}>
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Kaushik"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div className={`field ${focused === "email" ? "is-focused" : ""}`}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div className={`field ${focused === "project" ? "is-focused" : ""}`}>
                  <label>Project Type</label>
                  <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    onFocus={() => setFocused("project")}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="">Select a project type…</option>
                    <option>Brand Website</option>
                    <option>Portfolio Design</option>
                    <option>E-commerce</option>
                    <option>Web Application</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={`field ${focused === "message" ? "is-focused" : ""}`}>
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, timeline, and budget…"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                  <Send size={16} /> Send Message
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* CTA Strip */}
        <div className="cta-strip">
          <h3>
            Prefer a direct line? <br />
            <span className="gold-word">Email me directly.</span>
          </h3>
          <a href="mailto:kaushikdagaya1902@example.com">
            <Mail size={18} /> kaushikdagaya1902@example.com
          </a>
        </div>
      </div>
    </>
  );
}
