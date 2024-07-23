import React, { useState } from 'react';
import dropdownOptions from '../../dropdownOptions.json';
import FormGroup from './FormGroup';

const PersonalInfoSection = ({ data, handleChange, toggleSection, isCollapsed }) => {
  const [pictureError, setPictureError] = useState(false);
  const { titlePrefix, firstName, middleName, lastName, title, years, months, picture } = data;

  const handleFileChange = (e) => {
    handleChange(e);
    setPictureError(!e.target.files.length); // Set error state based on whether a file is selected
  };

  return (
    <div className="form-section">
      <h2 
        onClick={toggleSection}
        aria-expanded={!isCollapsed}
        aria-controls="personal-info-section"
      >
        Personal Information {isCollapsed ? '🔽' : '🔼'}
      </h2>
      <div 
        id="personal-info-section"
        className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
      >
        <FormGroup>
          <label htmlFor="picture">Profile Picture</label>
          <input
            required
            type="file"
            name="picture"
            id="picture"
            onChange={handleFileChange}
            className={!pictureError ? "input-error" : ""}
          />
          {!pictureError && <span className="error-message">image file is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="titlePrefix">Title</label>
          <select
            name="titlePrefix"
            id="titlePrefix"
            value={titlePrefix}
            onChange={handleChange}
            className={!titlePrefix ? "input-error" : ""}
            required
          >
            <option value="">Select Title</option>
            {dropdownOptions.titles.map((title, index) => (
              <option key={index} value={title}>{title}</option>
            ))}
          </select>
          {!titlePrefix && <span className="error-message">This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="firstName">First Name</label>
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
            className={!firstName ? "input-error" : ""}
          />
          {!firstName && <span className="error-message">This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            name="middleName"
            id="middleName"
            placeholder="Middle Name"
            value={middleName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
            className={!lastName ? "input-error" : ""}
          />
          {!lastName && <span className="error-message">This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Job Title</label>
          <select
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            className={!title ? "input-error" : ""}
            required
          >
            <option value="">Select Job Title</option>
            {dropdownOptions.jobTitles.map((jobTitle, index) => (
              <option key={index} value={jobTitle}>{jobTitle}</option>
            ))}
          </select>
          {!title && <span className="error-message">This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="years">Years of Experience</label>
          <select
            name="years"
            id="years"
            value={years}
            onChange={handleChange}
            className={!years ? "input-error" : ""}
            required
          >
            <option value="">Select Years</option>
            {dropdownOptions.years.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
          {!years && <span className="error-message">This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="months">Months of Experience</label>
          <select
            name="months"
            id="months"
            value={months}
            onChange={handleChange}
            className={!months ? "input-error" : ""}
            required
          >
            <option value="">Select Months</option>
            {dropdownOptions.months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
          {!months && <span className="error-message">This field is required</span>}
        </FormGroup>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
