import React from 'react';
import FormGroup from './FormGroup';

const EducationSection = ({ data, handleChange, toggleSection, isCollapsed }) => {
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
          <textarea
            name="education"
            id="education"
            placeholder="Describe your education"
            value={data.education}
            onChange={handleChange}
          ></textarea>
        </FormGroup>
      </div>
    </div>
  );
};

export default EducationSection;
