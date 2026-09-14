import { motion } from "framer-motion";
import education from "../data/education";
import { FaGraduationCap, FaCalendarAlt, FaAward, FaBookReader } from "react-icons/fa";
import "./Education.css";

function Education() {
  return (
    <section id="journey" className="education-section">
      <motion.div
        className="education-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section Header */}
        <div className="education-header">
          <span className="section-label">ACADEMIC BACKGROUND</span>
          <h2 className="section-title">EDUCATION</h2>
          <div className="title-underline"></div>
        </div>

        {/* Education Cards Container */}
        <div className="education-cards-wrapper">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-card-top">
                <div className="edu-icon-badge">
                  <FaGraduationCap className="edu-icon" />
                </div>
                <div className="edu-main-info">
                  <h3 className="edu-institution">{edu.institution}</h3>
                  <p className="edu-degree">{edu.degree}</p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="edu-metrics">
                <div className="edu-metric-item">
                  <FaCalendarAlt className="metric-icon" />
                  <span className="metric-label">EXPECTED GRADUATION:</span>
                  <span className="metric-value">{edu.graduation}</span>
                </div>
                <div className="edu-metric-item">
                  <FaAward className="metric-icon icon-cyan" />
                  <span className="metric-label">CGPA:</span>
                  <span className="metric-value highlight-cgpa">{edu.cgpa}</span>
                </div>
              </div>

              {/* Coursework Tags */}
              <div className="edu-coursework-section">
                <div className="coursework-header">
                  <FaBookReader className="coursework-icon" />
                  <span className="coursework-title">RELEVANT COURSEWORK</span>
                </div>
                <div className="coursework-tags">
                  {edu.coursework.map((course) => (
                    <span key={course} className="course-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
