import profile from "../data/profile";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const socialLinks = [
    { name: "GitHub", url: profile.github, icon: <FaGithub /> },
    { name: "LinkedIn", url: profile.linkedin, icon: <FaLinkedin /> },
    { name: "LeetCode", url: profile.leetcode, icon: <FaCode /> },
  ];

  const footerNavLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand & Tagline */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            AABHAS
          </a>
          <p className="footer-tagline">{profile.role}</p>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav" aria-label="Footer Navigation">
          <ul className="footer-nav-list">
            {footerNavLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="footer-nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons Group */}
        <div className="footer-social">
          {socialLinks.map((item) =>
            item.url ? (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ) : (
              <span
                key={item.name}
                className="footer-social-icon footer-social-disabled"
                title={`${item.name} profile link currently unavailable`}
                aria-disabled="true"
              >
                {item.icon}
              </span>
            )
          )}
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React 19 &amp; Vite.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
