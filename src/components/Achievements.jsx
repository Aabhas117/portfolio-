import { motion } from "framer-motion";
import achievements from "../data/achievements";
import { FaTrophy, FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";
import "./Achievements.css";

function Achievements() {
  const getAchievementIcon = (id) => {
    switch (id) {
      case 1:
        return <FaCode className="achievement-icon icon-yellow" />;
      case 2:
        return <FaRocket className="achievement-icon icon-purple" />;
      case 3:
        return <FaLaptopCode className="achievement-icon icon-cyan" />;
      default:
        return <FaTrophy className="achievement-icon icon-yellow" />;
    }
  };

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
          <span className="section-label">MILESTONES & HIGHLIGHTS</span>
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <div className="title-underline"></div>
        </div>

        {/* Dynamic Achievements Cards Grid */}
        <div className="achievements-grid">
          {achievements.map((item) => (
            <div key={item.id} className="achievement-card">
              <div className="achievement-card-header">
                <div className="achievement-icon-wrapper">
                  {getAchievementIcon(item.id)}
                </div>
                <h3 className="achievement-card-title">{item.title}</h3>
              </div>
              <p className="achievement-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Achievements;
