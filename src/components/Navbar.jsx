import { useState } from "react";
import profile from "../data/profile";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#journey" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", url: profile.github, icon: <FaGithub /> },
    { name: "LinkedIn", url: profile.linkedin, icon: <FaLinkedin /> },
    { name: "LeetCode", url: profile.leetcode, icon: <FaCode /> },
  ];

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Left: Brand Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          AABHAS
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Quick Social Icons */}
        <div className="navbar-right-social">
          {socialLinks.map((item) =>
            item.url ? (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-btn"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ) : (
              <span
                key={item.name}
                className="nav-social-btn nav-social-disabled"
                title={`${item.name} profile link currently unavailable`}
                aria-disabled="true"
              >
                {item.icon}
              </span>
            )
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <nav
          id="mobile-nav-menu"
          className="navbar-mobile-nav"
          aria-label="Mobile Navigation"
        >
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="mobile-nav-link" onClick={closeMenu}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
