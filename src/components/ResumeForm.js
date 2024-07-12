import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResumeForm.css';

const ResumeForm = ({ onSave }) => {
  const [data, setData] = useState({
    name: '',
    title: '',
    email: '',
    location: '',
    summary: '',
    skills: [''],

  
    education: '',
    picture: '',
    currentEmployer: '',
    yoe: '',

    experience: [
      {
        startDate: '',
        endDate: '',
        companyName: '',
        projects: ''
      }
    ]
    
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
    navigate('/preview');
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
    experience: [...data.experience, { startDate: '', endDate: '', companyName: '', projects: '' }]
  });
};




  return (
    <form onSubmit={handleSubmit} className="resume-form">
      <div className="form-group">
        <label htmlFor="picture">Profile Picture</label>
        <input type="file" name="picture" id="picture" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" value={data.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" placeholder="Title" value={data.title} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="yoe">Years of Experience</label>
        <input type="number" name="yoe" id="yoe" placeholder="Years of experience" value={data.yoe} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" value={data.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input type="text" name="location" id="location" placeholder="Location" value={data.location} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="summary">Summary</label>
        <textarea name="summary" id="summary" placeholder="Summary" value={data.summary} onChange={handleChange}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="skills">Skills</label>
        <textarea name="skills" id="skills" placeholder="Skills" value={data.skills} onChange={handleChange}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="currentEmployer">Current Company</label>
        <input type="text" name="currentEmployer" id="currentEmployer" placeholder="Current Company" value={data.currentEmployer} onChange={handleChange} />
      </div>
     
<div className="experience-section">
  <h2>Experience</h2>
  {data.experience.map((exp, index) => (
    <div key={index} className="form-group">
      <label htmlFor={`startDate-${index}`}>Start Date</label>
      <input type="date" name="startDate" id={`startDate-${index}`} value={exp.startDate} onChange={(e) => handleExperienceChange(index, e)} />
      <label htmlFor={`endDate-${index}`}>End Date</label>
      <input type="date" name="endDate" id={`endDate-${index}`} value={exp.endDate} onChange={(e) => handleExperienceChange(index, e)} />
      <label htmlFor={`companyName-${index}`}>Company Name</label>
      <input type="text" name="companyName" id={`companyName-${index}`} placeholder="Company Name" value={exp.companyName} onChange={(e) => handleExperienceChange(index, e)} />
      <label htmlFor={`projects-${index}`}>Projects</label>
      <textarea name="projects" id={`projects-${index}`} placeholder="Projects" value={exp.projects} onChange={(e) => handleExperienceChange(index, e)}></textarea>
    </div>
  ))}
  <button type="button" onClick={addExperienceSection}>Add Experience</button>
</div>






      <div className="form-group">
        <label htmlFor="education">Education</label>
        <textarea name="education" id="education" placeholder="Education" value={data.education} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ResumeForm;


