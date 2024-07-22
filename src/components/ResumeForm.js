import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ResumeForm.css";
import dropdownOptions from '../dropdownOptions.json';

const ResumeForm = ({ onSave }) => {
  const [data, setData] = useState({
    titlePrefix: "", 
    firstName: "",
    lastName: "",
    middleName: "", 
    email: "",
    city: "",
    country: "",
    summary: "",
    skills: [""],
    education: "",
    picture: "",
    currentEmployer: "",
    years: "",
    months: "",
    experience: [
      {
        startDate: "",
        endDate: "",
        companyName: "",
        projects: "",
      },
    ],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData({
      ...data,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(data);
    navigate("/preview");
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...data.experience];
    newExperience[index][name] = value;
    setData({
      ...data,
      experience: newExperience,
    });
  };

  const addExperienceSection = () => {
    setData({
      ...data,
      experience: [
        ...data.experience,
        { startDate: "", endDate: "", companyName: "", projects: "" },
      ],
    });
  };

  const handleSkillChange = (index, e) => {
    const { value } = e.target;
    const newSkills = [...data.skills];
    newSkills[index] = value;
    setData({
      ...data,
      skills: newSkills,
    });
  };

  const addSkill = () => {
    setData({
      ...data,
      skills: [...data.skills, ""],
    });
  };

  const removeSkill = (index) => {
    setData({
      ...data,
      skills: data.skills.filter((_, i) => i !== index),
    });
  };

  const handleExperienceRemove = (index) => {
    setData({
      ...data,
      experience: data.experience.filter((_, i) => i !== index),
    });
  };

  const [isSkillsCollapsed, setIsSkillsCollapsed] = useState(false);
  const [isExperienceCollapsed, setIsExperienceCollapsed] = useState(false);
  
  const toggleSkills = () => {
    setIsSkillsCollapsed(!isSkillsCollapsed);
  };

  const toggleExperience = () => {
    setIsExperienceCollapsed(!isExperienceCollapsed);
  };

  const [jobTitles, setJobTitles] = useState([]);
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [skills, setSkills] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    setJobTitles(dropdownOptions.jobTitles);
    setYears(dropdownOptions.years);
    setMonths(dropdownOptions.months);
    setSkills(dropdownOptions.skills);
    setTitles(dropdownOptions.titles);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="resume-form">
      {/* Personal Information Section */}
      <div className="form-section">
        <h2>Personal Information</h2>
        <div className="form-group">
          <label htmlFor="picture">Profile Picture</label>
          <input
            type="file"
            name="picture"
            id="picture"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="titlePrefix">Title</label>
          <select
            name="titlePrefix"
            id="titlePrefix"
            value={data.titlePrefix}
            onChange={handleChange}
          >
            <option value="">Select Title</option>
            {titles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            name="middleName"
            id="middleName"
            placeholder="Middle Name"
            value={data.middleName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <select
            name="title"
            id="title"
            value={data.title}
            onChange={handleChange}
          >
            <option value="">Select Job Title</option>
            {jobTitles.map((jobTitle, index) => (
              <option key={index} value={jobTitle}>
                {jobTitle}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="years">Years of Experience</label>
          <select
            name="years"
            id="years"
            value={data.years}
            onChange={handleChange}
          >
            <option value="">Select Years</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="months">Months of Experience</label>
          <select
            name="months"
            id="months"
            value={data.months}
            onChange={handleChange}
          >
            <option value="">Select Months</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="form-section">
        <h2>Contact Information</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            value={data.city}
            onChange={handleChange}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            value={data.country}
            onChange={handleChange}
          />
        </div> */}
      </div>

      {/* Summary Section */}
      <div className="form-section">
        <h2>Summary</h2>
        <div className="form-group">
          <textarea
            name="summary"
            id="summary"
            placeholder="Summary"
            value={data.summary}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="form-section">
        <h2 onClick={toggleSkills}>Skills {isSkillsCollapsed ? '🔽' : '🔼'}</h2>
        {!isSkillsCollapsed && (
          <>
            {data.skills.map((skill, index) => (
              <div key={index} className="form-group">
                <label htmlFor={`skill${index}`}>Skill {index + 1}</label>
                <select
                  name={`skill${index}`}
                  id={`skill${index}`}
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e)}
                >
                  <option value="">Select Skill</option>
                  {skills.map((skillOption, skillIndex) => (
                    <option key={skillIndex} value={skillOption}>
                      {skillOption}
                    </option>
                  ))}
                </select>
                <button type="button" onClick={() => removeSkill(index)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={addSkill}>Add Skill</button>
          </>
        )}
      </div>

      {/* Experience Section */}
      <div className="form-section">
        <h2 onClick={toggleExperience}>Experience {isExperienceCollapsed ? '🔽' : '🔼'}</h2>
        {!isExperienceCollapsed && (
          <>
            {data.experience.map((exp, index) => (
              <div key={index} className="form-group experience">
                <label htmlFor={`companyName${index}`}>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  id={`companyName${index}`}
                  placeholder="Company Name"
                  value={exp.companyName}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <label htmlFor={`startDate${index}`}>Start Date</label>
                <input
                  type="text"
                  name="startDate"
                  id={`startDate${index}`}
                  placeholder="Start Date"
                  value={exp.startDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <label htmlFor={`endDate${index}`}>End Date</label>
                <input
                  type="text"
                  name="endDate"
                  id={`endDate${index}`}
                  placeholder="End Date"
                  value={exp.endDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <label htmlFor={`projects${index}`}>Projects</label>
                <input
                  type="text"
                  name="projects"
                  id={`projects${index}`}
                  placeholder="Projects"
                  value={exp.projects}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <button type="button" onClick={() => handleExperienceRemove(index)}>Remove Experience</button>
              </div>
            ))}
            <button type="button" onClick={addExperienceSection}>Add Experience</button>
          </>
        )}
      </div>

      {/* Education Section */}
      <div className="form-section">
        <h2>Education</h2>
        <div className="form-group">
          <textarea
            name="education"
            id="education"
            placeholder="Education"
            value={data.education}
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit">Save and Preview</button>
    </form>
  );
};

export default ResumeForm;


