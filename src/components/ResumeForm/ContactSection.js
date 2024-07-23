import React from "react";
import "./../ResumeForm.css";

const ContactSection = ({ data, handleChange, toggleSection, isCollapsed }) => {
  return (
    <div className="form-section">
      <h2
        onClick={toggleSection}
        aria-expanded={!isCollapsed}
        aria-controls="contact-info-section"
      >
        Contact Information {isCollapsed ? '🔽' : '🔼'}
      </h2>
      <div
        id="contact-info-section"
        className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
      >
     
        <div className="form-group">
          <label htmlFor="city">City</label>
          <textarea
            name="city"
            id="city"
            placeholder="City"
            value={data.city || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={data.email || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
