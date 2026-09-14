import { motion } from "framer-motion";
import profile from "../data/profile";
import "./About.css";

function About() {
  const cards = [
    {
      number: "01",
      title: "PROBLEM SOLVING",
      description: "Practicing core Data Structures and Algorithms with a focus on writing optimized, clean code.",
    },
    {
      number: "02",
      title: "FULL STACK DEVELOPMENT",
      description: "Building responsive, modern end-to-end web applications using the MERN stack.",
    },
    {
      number: "03",
      title: "BACKEND ENGINEERING",
      description: "Architecting RESTful APIs, database schemas, authentication flows, and server-side logic.",
    },
    {
      number: "04",
      title: "CONTINUOUS LEARNING",
      description: "Constantly enhancing software architecture knowledge, engineering concepts, and developer tooling.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="about-header">
          <span className="section-label">GET TO KNOW ME</span>
          <h2 className="section-title">ABOUT ME</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-grid">
          {/* Left Column: Summary & Academic Info */}
          <div className="about-left">
            <h3 className="about-subtitle">BACKGROUND & OBJECTIVES</h3>
            <p className="about-text">{profile.summary}</p>
            <p className="about-text">{profile.goal}</p>

            {/* Academic Information Box */}
            <div className="academic-box" aria-label="Academic Information">
              <h4 className="academic-title">ACADEMIC PROFILE</h4>
              <div className="academic-details">
                <div className="academic-item">
                  <span className="academic-label">COLLEGE:</span>
                  <span className="academic-value">{profile.college}</span>
                </div>
                <div className="academic-item">
                  <span className="academic-label">DEGREE:</span>
                  <span className="academic-value">{profile.degree}</span>
                </div>
                <div className="academic-item">
                  <span className="academic-label">GRADUATION:</span>
                  <span className="academic-value">{profile.graduation}</span>
                </div>
                <div className="academic-item">
                  <span className="academic-label">CGPA:</span>
                  <span className="academic-value highlight-val">{profile.cgpa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Static Pillars */}
          <div className="about-right">
            <div className="cards-grid">
              {cards.map((card) => (
                <div key={card.number} className="about-card">
                  <span className="card-number">{card.number}</span>
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
