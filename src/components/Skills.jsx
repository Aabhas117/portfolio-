import { motion } from "framer-motion";
import skills from "../data/skills";
import {
  FaCode,
  FaJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaKey,
  FaReact,
  FaNodeJs,
  FaCloud,
  FaCreditCard,
  FaGitAlt,
  FaGithub,
  FaTerminal,
  FaNpm,
  FaNetworkWired,
  FaCubes,
  FaProjectDiagram,
  FaLayerGroup,
  FaMobileAlt,
  FaSlidersH,
  FaDocker,
  FaPlug,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiVite, SiPostman } from "react-icons/si";
import "./Skills.css";

function Skills() {
  const getCategoryIcon = (category) => {
    switch (category.toUpperCase()) {
      case "LANGUAGES":
        return <FaCode className="category-header-icon" />;
      case "FRONTEND":
        return <FaReact className="category-header-icon" />;
      case "BACKEND":
        return <FaServer className="category-header-icon" />;
      case "DATABASES & CLOUD":
        return <FaDatabase className="category-header-icon" />;
      case "TOOLS & DEVOPS":
        return <FaGitAlt className="category-header-icon" />;
      case "CORE CS":
        return <FaProjectDiagram className="category-header-icon" />;
      default:
        return <FaCode className="category-header-icon" />;
    }
  };

  const getSkillIcon = (name) => {
    switch (name) {
      case "C++":
        return <FaCode className="skill-icon icon-cyan" />;
      case "JavaScript (ES6+)":
        return <FaJs className="skill-icon icon-yellow" />;
      case "SQL":
        return <FaDatabase className="skill-icon icon-blue" />;
      case "HTML5":
        return <FaHtml5 className="skill-icon icon-orange" />;
      case "CSS3":
        return <FaCss3Alt className="skill-icon icon-blue" />;
      case "DSA":
      case "Data Structures & Algorithms":
        return <FaProjectDiagram className="skill-icon icon-purple" />;
      case "OOP":
      case "Object-Oriented Programming (OOP)":
        return <FaCubes className="skill-icon icon-indigo" />;
      case "DBMS":
      case "Database Management Systems (DBMS)":
        return <FaDatabase className="skill-icon icon-blue" />;
      case "Operating Systems":
        return <FaTerminal className="skill-icon icon-green" />;
      case "Computer Networks":
        return <FaNetworkWired className="skill-icon icon-cyan" />;
      case "Node.js":
        return <FaNodeJs className="skill-icon icon-green" />;
      case "Express.js":
        return <SiExpress className="skill-icon icon-white" />;
      case "RESTful APIs":
        return <FaServer className="skill-icon icon-purple" />;
      case "JWT Authentication":
        return <FaKey className="skill-icon icon-yellow" />;
      case "MVC Architecture":
        return <FaLayerGroup className="skill-icon icon-indigo" />;
      case "WebSocket":
        return <FaPlug className="skill-icon icon-purple" />;
      case "React.js":
        return <FaReact className="skill-icon icon-cyan" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="skill-icon icon-cyan" />;
      case "Vite":
        return <SiVite className="skill-icon icon-purple" />;
      case "State Management":
        return <FaSlidersH className="skill-icon icon-blue" />;
      case "Responsive Design":
        return <FaMobileAlt className="skill-icon icon-indigo" />;
      case "MongoDB":
        return <SiMongodb className="skill-icon icon-green" />;
      case "Mongoose":
        return <FaDatabase className="skill-icon icon-red" />;
      case "Cloudinary CDN":
        return <FaCloud className="skill-icon icon-blue" />;
      case "Stripe API":
        return <FaCreditCard className="skill-icon icon-indigo" />;
      case "Git":
        return <FaGitAlt className="skill-icon icon-orange" />;
      case "GitHub":
        return <FaGithub className="skill-icon icon-white" />;
      case "Postman":
        return <SiPostman className="skill-icon icon-orange" />;
      case "Linux/Unix Shell":
        return <FaTerminal className="skill-icon icon-green" />;
      case "VS Code":
        return <FaCode className="skill-icon icon-blue" />;
      case "npm":
        return <FaNpm className="skill-icon icon-red" />;
      case "Docker":
        return <FaDocker className="skill-icon icon-cyan" />;
      default:
        return <FaCode className="skill-icon" />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="skills-header">
          <span className="section-label">MY TOOLKIT</span>
          <h2 className="section-title">TECHNICAL ARSENAL</h2>
          <p className="skills-subtitle">
            Technologies and computer science foundations I work with and continue to develop.
          </p>
          <div className="title-underline"></div>
        </div>

        {/* 3x2 Grid for Desktop, 2col for Tablet, 1col for Mobile */}
        <div className="skills-grid">
          {skills.map((categoryObj) => (
            <div key={categoryObj.category} className="skill-category-card">
              <div className="category-header-group">
                {getCategoryIcon(categoryObj.category)}
                <h3 className="category-title">{categoryObj.category.toUpperCase()}</h3>
              </div>
              <div className="skills-chips-wrapper">
                {categoryObj.skills.map((skillName) => (
                  <div key={skillName} className="skill-chip">
                    {getSkillIcon(skillName)}
                    <span className="skill-name">{skillName}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
