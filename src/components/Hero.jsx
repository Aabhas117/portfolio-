import { motion } from "framer-motion";
import profile from "../data/profile";
import "./Hero.css";

function Hero() {
  const socialPlatforms = [
    { name: "GitHub", url: profile.github },
    { name: "LinkedIn", url: profile.linkedin },
    { name: "LeetCode", url: profile.leetcode },
  ];

  const focusAreas = [
    "FULL STACK DEVELOPMENT",
    "DSA & PROBLEM SOLVING",
    "BACKEND ENGINEERING",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Personal Intro */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-label" variants={itemVariants}>
            HELLO, I'M
          </motion.span>
          
          <motion.h1 className="hero-name" variants={itemVariants}>
            {profile.name.toUpperCase()}
          </motion.h1>
          
          <motion.h2 className="hero-role" variants={itemVariants}>
            {profile.role.toUpperCase()}
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            {profile.summary}
          </motion.p>

          {/* Static Focus Tags */}
          <motion.div className="hero-focus-tags" aria-label="Core Focus Areas" variants={itemVariants}>
            {focusAreas.map((tag) => (
              <span key={tag} className="focus-tag">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              VIEW MY WORK
            </motion.a>

            {profile.resume ? (
              <motion.a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                DOWNLOAD RESUME
              </motion.a>
            ) : (
              <button
                className="btn btn-secondary btn-disabled"
                disabled
                aria-disabled="true"
                title="Resume link currently unavailable"
              >
                DOWNLOAD RESUME
              </button>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div className="hero-social" aria-label="Social Links" variants={itemVariants}>
            <span className="social-label">PROFILES:</span>
            <div className="social-links-group">
              {socialPlatforms.map((platform) =>
                platform.url ? (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {platform.name}
                  </a>
                ) : (
                  <span
                    key={platform.name}
                    className="social-link social-link-disabled"
                    title={`${platform.name} profile link currently unavailable`}
                    aria-disabled="true"
                  >
                    {platform.name}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Static Terminal Visual Panel */}
        <motion.div
          className="hero-visual-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-dot dot-red"></span>
                <span className="control-dot dot-yellow"></span>
                <span className="control-dot dot-green"></span>
              </div>
              <span className="terminal-title">aabhas.dev ~ bash</span>
            </div>

            <div className="terminal-body">
              <p className="terminal-line prompt-line">
                <span className="prompt-symbol">$</span> cat profile.json
              </p>
              <div className="terminal-json">
                <span className="json-bracket">&#123;</span>
                <p className="json-line">
                  <span className="json-key">"name"</span>:{" "}
                  <span className="json-string">"{profile.name}"</span>,
                </p>
                <p className="json-line">
                  <span className="json-key">"college"</span>:{" "}
                  <span className="json-string">"AKGEC Ghaziabad"</span>,
                </p>
                <p className="json-line">
                  <span className="json-key">"degree"</span>:{" "}
                  <span className="json-string">"B.Tech CSE ({profile.graduation})"</span>,
                </p>
                <p className="json-line">
                  <span className="json-key">"stack"</span>:{" "}
                  <span className="json-array">["MongoDB", "Express", "React", "Node"]</span>,
                </p>
                <p className="json-line">
                  <span className="json-key">"cgpa"</span>:{" "}
                  <span className="json-string">"{profile.cgpa}"</span>
                </p>
                <span className="json-bracket">&#125;</span>
              </div>

              <p className="terminal-line prompt-line" style={{ marginTop: "1rem" }}>
                <span className="prompt-symbol">$</span> ./execute_goals.sh
              </p>
              <p className="terminal-output">&gt; build()    <span className="comment">// Full-Stack Web Applications</span></p>
              <p className="terminal-output">&gt; solve()    <span className="comment">// 70+ Algorithmic Problems</span></p>
              <p className="terminal-output">&gt; learn()    <span className="comment">// System Architecture & CS Fundamentals</span></p>
              <p className="terminal-output">&gt; improve()  <span className="comment">// Continuous Engineering Growth</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
