import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResumeForm.css";

const ResumeForm = ({ onSave }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    location: "",
    summary: "",
    skills: [""],
    education: "",
    picture: "",
    currentEmployer: "",
    yoe: "",
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

  const [isSkillsCollapsed, setIsSkillsCollapsed] = useState(false);
  const [isExperienceCollapsed, setIsExperienceCollapsed] = useState(false);

  const toggleSkills = () => {
    setIsSkillsCollapsed(!isSkillsCollapsed);
  };

  const toggleExperience = () => {
    setIsExperienceCollapsed(!isExperienceCollapsed);
  };

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
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="yoe">Years of Experience</label>
          <input
            type="number"
            name="yoe"
            id="yoe"
            placeholder="Years of experience"
            value={data.yoe}
            onChange={handleChange}
          />
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
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            value={data.location}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="form-section collapsible-section">
        <h2 onClick={toggleSkills} className="collapsible-header">
          Skills {isSkillsCollapsed ? "▲" : "▼"}
        </h2>
        {!isSkillsCollapsed && (
          <div className="skills-section">
            {data.skills.map((skill, index) => (
              <div key={index} className="form-group">
                <input
                  type="text"
                  name={`skill-${index}`}
                  placeholder="Skill"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e)}
                />
              </div>
            ))}
            <button type="button" onClick={addSkill}>
              Add Skill
            </button>
          </div>
        )}
      </div>

      {/* Experience Section */}
      <div className="form-section collapsible-section">
        <h2 onClick={toggleExperience} className="collapsible-header">
          Experience {isExperienceCollapsed ? "▲" : "▼"}
        </h2>
        {!isExperienceCollapsed && (
          <div className="experience-section">
            {data.experience.map((exp, index) => (
              <div key={index} className="form-group">
                <label htmlFor={`companyName-${index}`}>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  id={`companyName-${index}`}
                  placeholder="Company Name"
                  value={exp.companyName}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <label htmlFor={`startDate-${index}`}>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  id={`startDate-${index}`}
                  value={exp.startDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <label htmlFor={`endDate-${index}`}>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  id={`endDate-${index}`}
                  value={exp.endDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                />

                <label htmlFor={`projects-${index}`}>Projects</label>
                <textarea
                  name="projects"
                  id={`projects-${index}`}
                  placeholder="Projects"
                  value={exp.projects}
                  onChange={(e) => handleExperienceChange(index, e)}
                ></textarea>
              </div>
            ))}
            <button type="button" onClick={addExperienceSection}>
              Add Experience
            </button>
          </div>
        )}
      </div>

      {/* Education Section */}
      <div className="form-section">
        <h2>Education</h2>
        <div className="form-group">
          <label htmlFor="education">Education</label>
          <textarea
            name="education"
            id="education"
            placeholder="Education"
            value={data.education}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ResumeForm;
