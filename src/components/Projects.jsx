import { motion } from "framer-motion";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowUpRight, FiPlayCircle, FiShoppingBag } from "react-icons/fi";
import "./Projects.css";

// Clean Brand Visual for Vidyora
function VidyoraBrand() {
  return (
    <div className="project-brand-visual vidyora-brand-theme">
      <div className="brand-glow-effect"></div>
      <div className="brand-content">
        <div className="brand-icon-box">
          <FiPlayCircle className="brand-main-icon" />
        </div>
        <h3 className="brand-name-title">VIDYORA</h3>
        <span className="brand-subtitle-badge">FULL-STACK VIDEO PLATFORM</span>
      </div>
    </div>
  );
}

// Clean Brand Visual for My-Grocery
function GroceryBrand() {
  return (
    <div className="project-brand-visual grocery-brand-theme">
      <div className="brand-glow-effect"></div>
      <div className="brand-content">
        <div className="brand-icon-box">
          <FiShoppingBag className="brand-main-icon" />
        </div>
        <h3 className="brand-name-title">My-Grocery</h3>
        <span className="brand-subtitle-badge">FULL-STACK E-COMMERCE PLATFORM</span>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Centered Section Header */}
        <div className="projects-header-centered">
          <h2 className="projects-title">Projects</h2>
        </div>

        {/* 2-Column Grid */}
        <div className="projects-grid-2col">
          {projects.map((project) => {
            const isVidyora = project.name.toLowerCase().includes("vidyora");

            return (
              <motion.div
                key={project.id}
                className="project-card-premium"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Project Branding Visual Area */}
                <div className="project-brand-wrapper">
                  {isVidyora ? <VidyoraBrand /> : <GroceryBrand />}
                </div>

                {/* Card Body & Information */}
                <div className="project-card-body">
                  <h3 className="project-name-heading">{project.name}</h3>
                  <p className="project-description-text">{project.description}</p>

                  {/* Card Footer: Links & Circular Arrow */}
                  <div className="project-card-footer">
                    <div className="project-links-row">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-text-link"
                        >
                          <FaGithub className="link-inline-icon" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {project.github && project.live && (
                        <span className="link-separator">|</span>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-text-link"
                        >
                          <FiExternalLink className="link-inline-icon" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    {/* Circular Arrow Action Button */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-circle-arrow-btn"
                        aria-label={`Open ${project.name} Live Demo`}
                      >
                        <FiArrowUpRight className="arrow-icon" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
