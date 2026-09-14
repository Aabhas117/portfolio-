import profile from "../data/profile";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaCode, FaGraduationCap, FaAward } from "react-icons/fa";
import "./ProfileSidebar.css";

function ProfileSidebar() {
  const socialLinks = [
    { name: "Email", url: profile.email ? `mailto:${profile.email}` : "", icon: <FaEnvelope /> },
    { name: "Phone", url: profile.phone ? `tel:${profile.phone.replace(/\s+/g, "")}` : "", icon: <FaPhoneAlt /> },
    { name: "GitHub", url: profile.github, icon: <FaGithub /> },
    { name: "LinkedIn", url: profile.linkedin, icon: <FaLinkedin /> },
    { name: "LeetCode", url: profile.leetcode, icon: <FaCode /> },
  ];

  return (
    <aside className="profile-sidebar-card">
      {/* Profile Image Avatar */}
      <div className="profile-avatar-wrapper">
        <img
          src="/Profile.jpeg"
          alt="Aabhas Kumar"
          className="profile-image profile-avatar-img"
          onError={(e) => {
            if (e.target.src.includes("/Profile.jpeg")) {
              e.target.src = "/profile.jpeg";
            } else if (e.target.src.includes("/profile.jpeg")) {
              e.target.src = "/Profile.jpg";
            } else if (e.target.src.includes("/Profile.jpg")) {
              e.target.src = "/profile.jpg";
            }
          }}
        />
      </div>

      {/* Profile Identity Details */}
      <div className="profile-identity">
        <h1 className="profile-name-serif">{profile.name}</h1>
        <p className="profile-role-primary">Computer Science Engineering Student</p>
        <p className="profile-role-secondary">Full Stack Web Developer</p>
      </div>

      {/* Social Links Row */}
      <div className="profile-social-row" aria-label="Social Profiles">
        {socialLinks.map((item) =>
          item.url ? (
            <a
              key={item.name}
              href={item.url}
              target={item.name === "Email" || item.name === "Phone" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="profile-social-btn"
              title={item.name}
              aria-label={item.name}
            >
              {item.icon}
            </a>
          ) : (
            <span
              key={item.name}
              className="profile-social-btn sidebar-social-disabled"
              title={`${item.name} link currently unavailable`}
              aria-disabled="true"
            >
              {item.icon}
            </span>
          )
        )}
      </div>

      {/* Divider */}
      <div className="sidebar-divider"></div>

      {/* Quick Meta Stats */}
      <div className="profile-meta-list">
        <div className="meta-item">
          <FaGraduationCap className="meta-icon icon-purple" />
          <div className="meta-info">
            <span className="meta-label">INSTITUTION</span>
            <span className="meta-value">AKGEC Ghaziabad</span>
          </div>
        </div>

        <div className="meta-item">
          <FaAward className="meta-icon icon-cyan" />
          <div className="meta-info">
            <span className="meta-label">DEGREE &amp; CGPA</span>
            <span className="meta-value">B.Tech CSE • {profile.cgpa}</span>
          </div>
        </div>
      </div>

      {/* Sidebar Action Button */}
      <div className="profile-sidebar-actions">
        {profile.resume ? (
          <a
            href={profile.resume}
            download="Aabhas_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary sidebar-btn"
          >
            DOWNLOAD RESUME
          </a>
        ) : (
          <button
            className="btn btn-secondary btn-disabled sidebar-btn"
            disabled
            aria-disabled="true"
            title="Resume link currently unavailable"
          >
            DOWNLOAD RESUME
          </button>
        )}
      </div>
    </aside>
  );
}

export default ProfileSidebar;
