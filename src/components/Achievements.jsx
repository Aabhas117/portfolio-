import { motion } from "framer-motion";
import achievements from "../data/achievements";
import { FaTrophy, FaExternalLinkAlt, FaAward } from "react-icons/fa";
import "./Achievements.css";

function Achievements() {
  return (
    <section id="achievements" className="ach-section">
      <motion.div
        className="ach-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section Header */}
        <div className="ach-header">
          <span className="section-label">MILESTONES & HONORS</span>
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <div className="title-underline"></div>
        </div>

        {achievements.length === 0 ? (
          <div className="ach-empty-box">
            <FaAward className="ach-empty-icon" />
            <p className="ach-empty">Achievements coming soon.</p>
          </div>
        ) : (
          <div className="ach-grid">
            {achievements.map((item, index) => (
              <motion.div
                key={item.id}
                className="ach-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="ach-card-header">
                  <div className="ach-badge">
                    <FaTrophy className="ach-trophy-icon" />
                    <span className="ach-number">
                      {String(item.id).padStart(2, "0")}
                    </span>
                  </div>
                  {item.category && (
                    <span className="ach-category-tag">{item.category}</span>
                  )}
                </div>

                <h3 className="ach-title">{item.title}</h3>
                <p className="ach-desc">{item.description}</p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ach-link"
                  >
                    <span>{item.linkLabel || "View Details"}</span>
                    <FaExternalLinkAlt className="ach-link-icon" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Achievements;
