import React, { useState } from 'react';
import FormGroup from './FormGroup';

const EducationSection = ({ data, handleChange, toggleSection, isCollapsed }) => {
  const [educationError, setEducationError] = useState(false);

  const handleEducationChange = (e) => {
    handleChange(e);
    const { value } = e.target;
    const isValid = value.trim() !== "";
    setEducationError(!isValid);
  };

  return (
    <div className="form-section">
      <h2 
        onClick={toggleSection}
        aria-expanded={!isCollapsed}
        aria-controls="education-section"
      >
        Education {isCollapsed ? '🔽' : '🔼'}
      </h2>
      <div 
        id="education-section"
        className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
      >
        <FormGroup>
          <label htmlFor="education">Education</label>
          <textarea required
            name="education"
            id="education"
            placeholder="Describe your education"
            value={data.education || ""}
            onChange={handleEducationChange}
            className={educationError ? "input-error" : ""}
          ></textarea>
          {educationError && <span className="error-message">Education cannot be empty</span>}
        </FormGroup>
      </div>
    </div>
  );
};

export default EducationSection;
