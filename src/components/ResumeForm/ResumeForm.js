import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfoSection from './PersonalInfoSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import dropdownOptions from '../../dropdownOptions.json';
import './../ResumeForm.css';

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

  const [jobTitles, setJobTitles] = useState([]);
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [skills, setSkills] = useState([]);
  const [titles, setTitles] = useState([]);

  const [isPersonalInfoCollapsed, setIsPersonalInfoCollapsed] = useState(false);
  const [isSkillsCollapsed, setIsSkillsCollapsed] = useState(false);
  const [isExperienceCollapsed, setIsExperienceCollapsed] = useState(false);
  const [isEducationCollapsed, setIsEducationCollapsed] = useState(false);

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

  const togglePersonalInfo = () => setIsPersonalInfoCollapsed(!isPersonalInfoCollapsed);
  const toggleSkills = () => setIsSkillsCollapsed(!isSkillsCollapsed);
  const toggleExperience = () => setIsExperienceCollapsed(!isExperienceCollapsed);
  const toggleEducation = () => setIsEducationCollapsed(!isEducationCollapsed);

  useEffect(() => {
    setJobTitles(dropdownOptions.jobTitles);
    setYears(dropdownOptions.years);
    setMonths(dropdownOptions.months);
    setSkills(dropdownOptions.skills);
    setTitles(dropdownOptions.titles);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="resume-form">
      <PersonalInfoSection 
        data={data}
        handleChange={handleChange}
        toggleSection={togglePersonalInfo}
        isCollapsed={isPersonalInfoCollapsed}
        titles={titles}
        jobTitles={jobTitles}
        years={years}
        months={months}
      />
      <SkillsSection 
        data={data}
        handleSkillChange={handleSkillChange}
        addSkill={addSkill}
        removeLastSkill={removeLastSkill}
        toggleSection={toggleSkills}
        isCollapsed={isSkillsCollapsed}
        skills={skills}
      />
      <ExperienceSection 
        data={data}
        handleExperienceChange={handleExperienceChange}
        addExperienceSection={addExperienceSection}
        removeLastExperience={removeLastExperience}
        toggleSection={toggleExperience}
        isCollapsed={isExperienceCollapsed}
      />
      <EducationSection 
        data={data}
        handleChange={handleChange}
        toggleSection={toggleEducation}
        isCollapsed={isEducationCollapsed}
      />
      <button type="submit">Save and Preview</button>
    </form>
  );
};

export default ResumeForm;
