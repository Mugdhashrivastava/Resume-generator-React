import React, { useState } from 'react';
import FormGroup from './FormGroup';

const ExperienceSection = ({ data, handleExperienceChange, addExperienceSection, removeLastExperience, toggleSection, isCollapsed }) => {
  const [errors, setErrors] = useState({});

  const handleAddExperience = () => {
    const newErrors = {};
    data.experience.forEach((exp, index) => {
      if (!exp.startDate || !exp.endDate || !exp.companyName || !exp.projects) {
        newErrors[index] = {
          startDate: !exp.startDate ? "Start Date is required" : "",
          endDate: !exp.endDate ? "End Date is required" : "",
          companyName: !exp.companyName ? "Company Name is required" : "",
          projects: !exp.projects ? "Projects are required" : ""
        };
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      addExperienceSection();
    } else {
      alert("Please fill out all required fields before adding another experience.");
    }
  };

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
              <label htmlFor={`companyName${index}`}>Company Name</label>
              <input
                type="text"
                name="companyName"
                id={`companyName${index}`}
                placeholder="Company Name"
                value={exp.companyName}
                onChange={(e) => handleExperienceChange(index, e)}
                className={errors[index]?.companyName ? "required-field" : ""}
                required
              />
              {errors[index]?.companyName && <span className="error-message">{errors[index].companyName}</span>}
            </FormGroup>
            <div className="experience-dates">
  <FormGroup>
    <label htmlFor={`startDate${index}`}>Start Date</label>
    <input
      type="date"
      name="startDate"
      id={`startDate${index}`}
      value={exp.startDate}
      onChange={(e) => handleExperienceChange(index, e)}
    />
    {errors[index]?.startDate && <span className="error-message">{errors[index].startDate}</span>}
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
    {errors[index]?.endDate && <span className="error-message">{errors[index].endDate}</span>}
  </FormGroup>
</div>

         
            <FormGroup>
              <label htmlFor={`projects${index}`}>Projects</label>
              <textarea
                name="projects"
                id={`projects${index}`}
                placeholder="Describe your projects"
                value={exp.projects}
                onChange={(e) => handleExperienceChange(index, e)}
                className={errors[index]?.projects ? "required-field" : ""}
                required
              ></textarea>
              {errors[index]?.projects && <span className="error-message">{errors[index].projects}</span>}
            </FormGroup>
            {index > 0 && <button type="button" onClick={removeLastExperience}>Remove</button>}
          </div>
        ))}
        <button type="button" onClick={handleAddExperience}>Add Experience</button>
      </div>
    </div>
  );
};

export default ExperienceSection;
