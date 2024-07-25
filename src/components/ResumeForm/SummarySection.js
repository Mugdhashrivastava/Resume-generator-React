import React, { useState } from 'react';
import FormGroup from './FormGroup';

const SummarySection = ({ data, handleChange, toggleSection, isCollapsed }) => {
  
  const [summaryError, setSummaryError] = useState(false);


  const handleSummaryChange = (e) => {
    handleChange(e); 
    const { value } = e.target;

    
    const isValid = value.trim() !== ""; 
    setSummaryError(!isValid); 
  };

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
          <label htmlFor="summary">Summary</label>
          <textarea required
            name="summary"
            id="summary"
            placeholder="Describe your summary"
            value={data.summary || ""}
            onChange={handleSummaryChange} 
            className={summaryError ? "input-error" : ""} 
          ></textarea>
          {summaryError && <span className="error-message">Summary cannot be empty</span>} 
        </FormGroup>
      </div>
    </div>
  );
};

export default SummarySection;
