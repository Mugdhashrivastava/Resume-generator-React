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
    skills: '',
    experience: '',
    education: '',
    picture: '',
    currentEmployer: '',
    yoe: '',
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
        <label htmlFor="currentEmployer">Current Employer</label>
        <input type="text" name="currentEmployer" id="currentEmployer" placeholder="Current Company" value={data.currentEmployer} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="experience">Experience</label>
        <textarea name="experience" id="experience" placeholder="Experience" value={data.experience} onChange={handleChange}></textarea>
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
