import React from 'react';
import dropdownOptions from '../../dropdownOptions.json';
import FormGroup from './FormGroup';

const SkillsSection = ({ data, handleSkillChange, addSkill, removeLastSkill, toggleSection, isCollapsed }) => {
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
          <FormGroup key={index}>
            <label htmlFor={`skill${index}`}>Skill {index + 1}</label>
            <select
              name={`skill${index}`}
              id={`skill${index}`}
              value={skill}
              onChange={(e) => handleSkillChange(index, e)}
            >
              <option value="">Select Skill</option>
              {dropdownOptions.skills.map((skillOption, skillIndex) => (
                <option key={skillIndex} value={skillOption}>
                  {skillOption}
                </option>
              ))}
            </select>
            {index > 0 && (
              <button type="button" onClick={removeLastSkill}>Remove</button>
            )}
          </FormGroup>
        ))}
        <button type="button" onClick={addSkill}>Add Skill</button>
      </div>
    </div>
  );
};

export default SkillsSection;
