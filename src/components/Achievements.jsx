import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import "./Achievements.css";

function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <motion.div
        className="achievements-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section Header */}
        <div className="achievements-header">
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <div className="title-underline"></div>
        </div>

        {/* Coming Soon Card */}
        <div className="achievements-coming-soon-card">
          <FaTrophy className="coming-soon-icon" />
          <h3 className="coming-soon-title">COMING SOON</h3>
          <p className="coming-soon-desc">
            New milestones, certifications, and contest rankings will be updated here soon.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Achievements;
