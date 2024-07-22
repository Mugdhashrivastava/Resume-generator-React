import React from 'react';
import dropdownOptions from '../../dropdownOptions.json';
import FormGroup from './FormGroup';

const PersonalInfoSection = ({ data, handleChange, toggleSection, isCollapsed }) => {
  const { titlePrefix, firstName, middleName, lastName, title, years, months } = data;

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
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="titlePrefix">Title</label>
          <select
            name="titlePrefix"
            id="titlePrefix"
            value={titlePrefix}
            onChange={handleChange}
          >
            <option value="">Select Title</option>
            {dropdownOptions.titles.map((title, index) => (
              <option key={index} value={title}>{title}</option>
            ))}
          </select>
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
          />
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
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Job Title</label>
          <select
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
          >
            <option value="">Select Job Title</option>
            {dropdownOptions.jobTitles.map((jobTitle, index) => (
              <option key={index} value={jobTitle}>{jobTitle}</option>
            ))}
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="years">Years of Experience</label>
          <select
            name="years"
            id="years"
            value={years}
            onChange={handleChange}
          >
            <option value="">Select Years</option>
            {dropdownOptions.years.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="months">Months of Experience</label>
          <select
            name="months"
            id="months"
            value={months}
            onChange={handleChange}
          >
            <option value="">Select Months</option>
            {dropdownOptions.months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
        </FormGroup>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
