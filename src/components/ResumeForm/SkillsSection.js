import React, { useState } from "react";
import dropdownOptions from '../../dropdownOptions.json'; 

const SkillsSection = ({ data, handleSkillChange, addSkill, removeLastSkill }) => {
  const [isCollapsed, setIsCollapsed] = useState(true); 
  const skills = dropdownOptions.skills;

  const handleAddSkill = () => {
    const lastSkill = data.skills[data.skills.length - 1];
    if (lastSkill) {
      addSkill();
    } else {
      alert("Please fill out the previous skill before adding another.");
    }
  };

  const toggleSection = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="form-section">
      <h2 
        onClick={toggleSection}
        aria-expanded={!isCollapsed}
        aria-controls="skills-section"
      >
        Skills {isCollapsed ? '🔽' : '🔼'}
      </h2>
      <div 
        id="skills-section"
        className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
      >
        {data.skills.map((skill, index) => (
          <div key={index} className="form-group">
            <label htmlFor={`skill${index}`}>Skill {index + 1}</label>
            <select
              name={`skill${index}`}
              id={`skill${index}`}
              value={skill}
              onChange={(e) => handleSkillChange(index, e)}
              className={!skill ? "required-field" : ""}
              required
            >
              <option value="">Select Skill</option>
              {skills.map((skillOption, skillIndex) => (
                <option key={skillIndex} value={skillOption}>
                  {skillOption}
                </option>
              ))}
            </select>
            {!skill && <span className="error-message">This field is required</span>} 
            <br /> 
            {data.skills.length > 1 && index === data.skills.length - 1 && (
              <button type="button" onClick={removeLastSkill}>Remove</button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddSkill}>Add Skill</button>
      </div>
    </div>
  );
};

export default SkillsSection;
