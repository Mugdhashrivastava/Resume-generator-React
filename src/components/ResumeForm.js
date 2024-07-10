import React, { useState } from 'react';

const ResumeForm = ({ onSave }) => {
  const [data, setData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    skills: '',
    experience: '',
    education: '',
    picture: ''
  });

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="picture" onChange={handleChange} />
      <input type="text" name="name" placeholder="Name" value={data.name} onChange={handleChange} />
      <input type="text" name="title" placeholder="Title" value={data.title} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" value={data.phone} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={data.location} onChange={handleChange} />
      <textarea name="summary" placeholder="Summary" value={data.summary} onChange={handleChange}></textarea>
      <textarea name="skills" placeholder="Skills" value={data.skills} onChange={handleChange}></textarea>
      <textarea name="experience" placeholder="Experience" value={data.experience} onChange={handleChange}></textarea>
      <textarea name="education" placeholder="Education" value={data.education} onChange={handleChange}></textarea>
      <button type="submit">Save</button>
    </form>
  );
};

export default ResumeForm;
