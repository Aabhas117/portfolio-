import { motion } from "framer-motion";
import profile from "../data/profile";
import { FaUserCircle, FaFileDownload } from "react-icons/fa";
import "./Summary.css";

function Summary() {
  return (
    <section id="summary" className="summary-section">
      <motion.div
        className="summary-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="summary-header">
          <FaUserCircle className="summary-icon" />
          <h2 className="summary-title">PROFESSIONAL SUMMARY</h2>
        </div>

        <p className="summary-text">{profile.summary}</p>
        <p className="summary-goal-text">{profile.goal}</p>

        <div className="summary-actions">
          {profile.resume ? (
            <motion.a
              href={profile.resume}
              download="Aabhas_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary summary-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFileDownload /> DOWNLOAD RESUME
            </motion.a>
          ) : (
            <button
              className="btn btn-secondary btn-disabled summary-btn"
              disabled
              aria-disabled="true"
              title="Resume link currently unavailable"
            >
              <FaFileDownload /> DOWNLOAD RESUME
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Summary;
