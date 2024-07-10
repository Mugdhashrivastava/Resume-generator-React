
import React, { forwardRef } from 'react';
import './ResumePreview.css';

const ResumePreview = forwardRef(({ data }, ref) => {
  return (
    <div className="resume-container" ref={ref}>
      <div className="left-column">
        {data.picture && <img src={data.picture} alt="User" className="profile-picture" />}
        <p><strong>Title:</strong> {data.title}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Location:</strong> {data.location}</p>
        <p><strong>Summary:</strong> {data.summary}</p>
        <p><strong>Skills:</strong> {data.skills}</p>
      </div>
      <div className="right-column">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <p><strong>Experience:</strong> {data.experience}</p>
        <p><strong>Education:</strong> {data.education}</p>
      </div>
    </div>
  );
});

export default ResumePreview;
