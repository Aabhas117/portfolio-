import { motion } from "framer-motion";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./Projects.css";

// Helper component for visual preview of Vidyora
function VidyoraVisual() {
  return (
    <div className="project-visual-preview vidyora-theme">
      <div className="browser-header">
        <div className="browser-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="browser-address">vidyora-amber.vercel.app</div>
      </div>
      <div className="preview-canvas">
        <div className="video-player-mockup">
          <div className="play-button-ring">
            <div className="play-triangle"></div>
          </div>
          <div className="video-progress-bar">
            <div className="progress-filled"></div>
          </div>
        </div>
        <div className="video-feed-mockup">
          <div className="feed-card feed-card-1"></div>
          <div className="feed-card feed-card-2"></div>
          <div className="feed-card feed-card-3"></div>
        </div>
      </div>
    </div>
  );
}

// Helper component for visual preview of My-Grocery
function GroceryVisual() {
  return (
    <div className="project-visual-preview grocery-theme">
      <div className="browser-header">
        <div className="browser-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="browser-address">my-grocery-one.vercel.app</div>
      </div>
      <div className="preview-canvas">
        <div className="store-header-mockup">
          <div className="store-logo-pill"></div>
          <div className="store-search-pill"></div>
          <div className="store-cart-badge"></div>
        </div>
        <div className="products-grid-mockup">
          <div className="product-card-mock">
            <div className="product-img"></div>
            <div className="product-line"></div>
          </div>
          <div className="product-card-mock">
            <div className="product-img"></div>
            <div className="product-line"></div>
          </div>
          <div className="product-card-mock">
            <div className="product-img"></div>
            <div className="product-line"></div>
          </div>
        </div>
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
          <span className="projects-label">PROJECTS</span>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A selection of projects built with modern web technologies.
          </p>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="projects-grid-2col">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card-minimal"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Project Visual Area */}
              <div className="project-card-visual-wrapper">
                {project.name === "Vidyora" ? (
                  <VidyoraVisual />
                ) : (
                  <GroceryVisual />
                )}
              </div>

              {/* Card Footer / Info Area */}
              <div className="project-card-info">
                <h3 className="project-card-name">{project.name}</h3>

                <div className="project-card-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <FaGithub className="link-icon" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn project-link-live"
                    >
                      <FiExternalLink className="link-icon" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
