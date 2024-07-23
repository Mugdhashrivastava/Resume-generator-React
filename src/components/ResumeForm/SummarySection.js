import React from 'react';
import FormGroup from './FormGroup';

const SummarySection = ({ data, handleChange, toggleSection, isCollapsed }) => {
  return (
    <div className="form-section">
      <h2 
        onClick={toggleSection}
        aria-expanded={!isCollapsed}
        aria-controls="summary-section"
      >
        Summary {isCollapsed ? '🔽' : '🔼'}
      </h2>
      <div 
        id="summary-section"
        className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
      >
        <FormGroup>
          <label htmlFor="summary">summary</label>
          <textarea
            name="summary"
            id="summary"
            placeholder="Describe your summary"
            value={data.summary}
            onChange={handleChange}
          ></textarea>
        </FormGroup>
      </div>
    </div>
  );
};

export default SummarySection;
