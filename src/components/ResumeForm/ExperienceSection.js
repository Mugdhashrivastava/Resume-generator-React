import React from 'react';
import FormGroup from './FormGroup';

const ExperienceSection = ({ data, handleExperienceChange, addExperienceSection, removeLastExperience, toggleSection, isCollapsed }) => {
  return (
    <div className="form-section">
      <h2 
        onClick={toggleSection}
        aria-expanded={!isCollapsed}
        aria-controls="experience-section"
      >
        Experience {isCollapsed ? '🔽' : '🔼'}
      </h2>
      <div 
        id="experience-section"
        className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
      >
        {data.experience.map((exp, index) => (
          <div key={index} className="experience-section">
            <h3>Experience {index + 1}</h3>
            <FormGroup>
              <label htmlFor={`startDate${index}`}>Start Date</label>
              <input
                type="date"
                name="startDate"
                id={`startDate${index}`}
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor={`endDate${index}`}>End Date</label>
              <input
                type="date"
                name="endDate"
                id={`endDate${index}`}
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor={`companyName${index}`}>Company Name</label>
              <input
                type="text"
                name="companyName"
                id={`companyName${index}`}
                placeholder="Company Name"
                value={exp.companyName}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor={`projects${index}`}>Projects</label>
              <textarea
                name="projects"
                id={`projects${index}`}
                placeholder="Describe your projects"
                value={exp.projects}
                onChange={(e) => handleExperienceChange(index, e)}
              ></textarea>
            </FormGroup>
            {index > 0 && <button type="button" onClick={removeLastExperience}>Remove</button>}
          </div>
        ))}
        <button type="button" onClick={addExperienceSection}>Add Experience</button>
      </div>
    </div>
  );
};

export default ExperienceSection;
