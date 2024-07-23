// import React from "react";
// import "./../ResumeForm.css";

// const ContactSection = ({ data, handleChange, toggleSection, isCollapsed }) => {
//   return (
//     <div className="form-section">
//       <h2
//         onClick={toggleSection}
//         aria-expanded={!isCollapsed}
//         aria-controls="contact-info-section"
//       >
//         Contact Information {isCollapsed ? '🔽' : '🔼'}
//       </h2>
//       <div
//         id="contact-info-section"
//         className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
//       >
     
//         <div className="form-group">
//           <label htmlFor="city">City</label>
//           <textarea
//             name="city"
//             id="city"
//             placeholder="City"
//             value={data.city || ""}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Email"
//             value={data.email || ""}
//             onChange={handleChange}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;



import React, { useState } from "react";
import "./../ResumeForm.css";

const ContactSection = ({ data, handleChange, toggleSection, isCollapsed }) => {
  // State to track errors
  const [cityError, setCityError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // Function to handle changes and validate input
  const handleInputChange = (e) => {
    handleChange(e); // Call the original handleChange function
    const { name, value } = e.target;

    // Validate based on the field name
    switch (name) {
      case "city":
        setCityError(!value.trim()); // Update city error state
        break;
      case "email":
        setEmailError(!value.includes('@')); // Simplified email validation
        break;
      default:
        break;
    }
  };

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
            onChange={handleInputChange} // Use the custom change handler
            className={cityError ? "input-error" : ""} // Apply error class conditionally
          ></textarea>
          {cityError && <span className="error-message">City is required</span>} {/* Display error message */}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={data.email || ""}
            onChange={handleInputChange} // Use the custom change handler
            className={emailError ? "input-error" : ""} // Apply error class conditionally
          />
          {emailError && <span className="error-message">Valid email is required</span>} {/* Display error message */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

