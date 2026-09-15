import { useState } from "react";
import { motion } from "framer-motion";
import profile from "../data/profile";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaCode, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section Header */}
        <div className="contact-header">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">LET'S CONNECT</h2>
          <p className="contact-subtitle">
            Have a project, opportunity, or idea worth discussing? Let's connect and build something meaningful.
          </p>
          <div className="title-underline"></div>
        </div>

        {/* 2-Column Grid */}
        <div className="contact-grid">
          {/* Left Column: Contact Details */}
          <div className="contact-details-card">
            <h3 className="details-title">CONTACT DIRECTORY</h3>
            <p className="details-desc">
              Feel free to reach out directly via email or connect across technical networks.
            </p>

            <div className="details-list">
              {/* Email */}
              <div className="detail-item">
                <div className="detail-icon-wrapper">
                  <FaEnvelope className="detail-icon icon-purple" />
                </div>
                <div className="detail-info">
                  <span className="detail-label">EMAIL</span>
                  {profile.email ? (
                    <a href={`mailto:${profile.email}`} className="detail-value">
                      {profile.email}
                    </a>
                  ) : (
                    <span className="detail-value disabled-text">Not provided</span>
                  )}
                </div>
              </div>


              {/* LinkedIn */}
              <div className="detail-item">
                <div className="detail-icon-wrapper">
                  <FaLinkedin className="detail-icon icon-blue" />
                </div>
                <div className="detail-info">
                  <span className="detail-label">LINKEDIN</span>
                  {profile.linkedin ? (
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="detail-value">
                      Connect on LinkedIn
                    </a>
                  ) : (
                    <span className="detail-value disabled-text">Profile URL coming soon</span>
                  )}
                </div>
              </div>

              {/* GitHub */}
              <div className="detail-item">
                <div className="detail-icon-wrapper">
                  <FaGithub className="detail-icon icon-white" />
                </div>
                <div className="detail-info">
                  <span className="detail-label">GITHUB</span>
                  {profile.github ? (
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="detail-value">
                      View GitHub Repositories
                    </a>
                  ) : (
                    <span className="detail-value disabled-text">Profile URL coming soon</span>
                  )}
                </div>
              </div>

              {/* LeetCode */}
              <div className="detail-item">
                <div className="detail-icon-wrapper">
                  <FaCode className="detail-icon icon-yellow" />
                </div>
                <div className="detail-info">
                  <span className="detail-label">LEETCODE</span>
                  {profile.leetcode ? (
                    <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="detail-value">
                      View Profile
                    </a>
                  ) : (
                    <span className="detail-value disabled-text">Profile URL coming soon</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3 className="form-title">SEND A MESSAGE</h3>

            {isSubmitted ? (
              <div className="form-success-box" role="alert">
                <FaCheckCircle className="success-icon" />
                <h4>MESSAGE SENT SUCCESSFULLY</h4>
                <p>Thank you for reaching out! I will get back to you as soon as possible.</p>
                <button
                  className="btn btn-secondary btn-reset"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`form-input ${formErrors.name ? "input-error" : ""}`}
                  />
                  {formErrors.name && <span className="error-text">{formErrors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`form-input ${formErrors.email ? "input-error" : ""}`}
                  />
                  {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    className={`form-input form-textarea ${formErrors.message ? "input-error" : ""}`}
                  ></textarea>
                  {formErrors.message && <span className="error-text">{formErrors.message}</span>}
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane /> SEND MESSAGE
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
