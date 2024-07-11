
import React, { forwardRef } from 'react';
import './ResumePreview.css';

const ResumePreview = forwardRef(({ data }, ref) => {
  return (
    <div className="resume-container" ref={ref}>
      <div className="left-column">
        {data.picture && <img src={data.picture} alt="User" className="profile-picture" />}
        <p> {data.title}</p>
        <p><strong>{data.yoe} years of experience </strong></p>
        <h1><strong>CONTACT</strong> </h1>
        <p><strong>Location:</strong> {data.location}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <h1><strong>SUMMARY</strong></h1>
        <p> {data.summary}</p>
        <p><strong>Skills:</strong> {data.skills}</p>
      </div>
      <div className="right-column">
        <h1>{data.name}</h1>
        <p>{data.currentEmployer}</p>
        <p>{data.title}</p>
        <p><strong>Experience:</strong> {data.experience}</p>
        <p><strong>Education:</strong> {data.education}</p>
      </div>
    </div>
  );
});

export default ResumePreview;
