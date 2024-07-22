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
    // Ensure the first experience section is filled
    if (data.experience[0].startDate && data.experience[0].endDate && data.experience[0].companyName && data.experience[0].projects) {
      setData({
        ...data,
        experience: [
          ...data.experience,
          { startDate: "", endDate: "", companyName: "", projects: "" },
        ],
      });
    } else {
      alert("Please fill out the first experience section before adding another.");
    }
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
    // Ensure the first skill is filled
    if (data.skills[0]) {
      setData({
        ...data,
        skills: [...data.skills, ""],
      });
    } else {
      alert("Please fill out the first skill before adding another.");
    }
  };

  const removeLastSkill = () => {
    // Ensure there are at least two skills before removing the last one
    if (data.skills.length > 1) {
      setData({
        ...data,
        skills: data.skills.slice(0, -1),
      });
    }
  };

  const removeLastExperience = () => {
    setData({
      ...data,
      experience: data.experience.slice(0, -1),
    });
  };

  const [isPersonalInfoCollapsed, setIsPersonalInfoCollapsed] = useState(false);
  const [isSkillsCollapsed, setIsSkillsCollapsed] = useState(false);
  const [isExperienceCollapsed, setIsExperienceCollapsed] = useState(false);
  const [isEducationCollapsed, setIsEducationCollapsed] = useState(false);

  const togglePersonalInfo = () => {
    setIsPersonalInfoCollapsed(!isPersonalInfoCollapsed);
  };

  const toggleSkills = () => {
    setIsSkillsCollapsed(!isSkillsCollapsed);
  };

  const toggleExperience = () => {
    setIsExperienceCollapsed(!isExperienceCollapsed);
  };

  const toggleEducation = () => {
    setIsEducationCollapsed(!isEducationCollapsed);
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
        <h2 
          onClick={togglePersonalInfo}
          aria-expanded={!isPersonalInfoCollapsed}
          aria-controls="personal-info-section"
        >
          Personal Information {isPersonalInfoCollapsed ? '🔽' : '🔼'}
        </h2>
        <div 
          id="personal-info-section"
          className={`collapsible-content ${isPersonalInfoCollapsed ? 'collapsed' : 'expanded'}`}
        >
          <div className="form-group">
            <label htmlFor="picture">Profile Picture</label>
            <input required
              type="file"
              name="picture"
              id="picture"
              onChange={handleChange}
            />
          </div>
          {/* Other fields for personal information */}
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
            <input required
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
            <input required
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
      </div>

      {/* Skills Section */}
      <div className="form-section">
        <h2 
          onClick={toggleSkills}
          aria-expanded={!isSkillsCollapsed}
          aria-controls="skills-section"
        >
          Skills {isSkillsCollapsed ? '🔽' : '🔼'}
        </h2>
        <div 
          id="skills-section"
          className={`collapsible-content ${isSkillsCollapsed ? 'collapsed' : 'expanded'}`}
        >
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
              {/* Only show remove button if there are more than one skill */}
              {index > 0 && (
                <button type="button" onClick={removeLastSkill}>Remove</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addSkill}>Add Skill</button>
        </div>
      </div>

      {/* Experience Section */}
      <div className="form-section">
        <h2 
          onClick={toggleExperience}
          aria-expanded={!isExperienceCollapsed}
          aria-controls="experience-section"
        >
          Experience {isExperienceCollapsed ? '🔽' : '🔼'}
        </h2>
        <div 
          id="experience-section"
          className={`collapsible-content ${isExperienceCollapsed ? 'collapsed' : 'expanded'}`}
        >
          {data.experience.map((exp, index) => (
            <div key={index} className="experience-section">
              <h3>Experience {index + 1}</h3>
              <div className="form-group">
                <label htmlFor={`startDate${index}`}>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  id={`startDate${index}`}
                  value={exp.startDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`endDate${index}`}>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  id={`endDate${index}`}
                  value={exp.endDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`companyName${index}`}>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  id={`companyName${index}`}
                  placeholder="Company Name"
                  value={exp.companyName}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`projects${index}`}>Projects</label>
                <textarea
                  name="projects"
                  id={`projects${index}`}
                  placeholder="Describe your projects"
                  value={exp.projects}
                  onChange={(e) => handleExperienceChange(index, e)}
                ></textarea>
              </div>
              {index > 0 && <button type="button" onClick={removeLastExperience}>Remove</button>}
            </div>
          ))}
          <button type="button" onClick={addExperienceSection}>Add Experience</button>
        </div>
      </div>

      {/* Education Section */}
      <div className="form-section">
        <h2 
          onClick={toggleEducation}
          aria-expanded={!isEducationCollapsed}
          aria-controls="education-section"
        >
          Education {isEducationCollapsed ? '🔽' : '🔼'}
        </h2>
        <div 
          id="education-section"
          className={`collapsible-content ${isEducationCollapsed ? 'collapsed' : 'expanded'}`}
        >
          <div className="form-group">
            <label htmlFor="education">Education</label>
            <textarea
              name="education"
              id="education"
              placeholder="Describe your education"
              value={data.education}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>

      <button type="submit">Save and Preview</button>
    </form>
  );
};

export default ResumeForm;
