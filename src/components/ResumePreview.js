import React, { forwardRef } from "react";
import "./ResumePreview.css";

const ResumePreview = forwardRef(({ data }, ref) => {
  return (
    <div className="resume-container" ref={ref}>
      <div className="left-column">
        {data.picture && (
          <img src={data.picture} alt="User" className="profile-picture" />
        )}
        <div className="info-section">
          <p className="title">{data.title}</p>
          <p className="yoe">
            <strong>{data.yoe} years of experience</strong>
          </p>
          <h2 className="section-header">Contact</h2>
          <p>
            <strong>Location:</strong> {data.location}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <h2 className="section-header">Summary</h2>
          <p>{data.summary}</p>
          <h2 className="section-header">Skills</h2>
          <p>{data.skills}</p>
        </div>
      </div>
      <div className="right-column">
        <h1 className="name">{data.name}</h1>
        <p className="current-employer">{data.currentEmployer}</p>
        <p className="title">{data.title}</p>
      

        <h2 className="section-header">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="experience-section">
            <p>
              <strong>Company:</strong> {exp.companyName}
            </p>
            <p>
              <strong>Start Date:</strong> {exp.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {exp.endDate}
            </p>
            <p>
              <strong>Projects:</strong> {exp.projects}
            </p>
          </div>
        ))}

        <h2 className="section-header">Education</h2>
        <p>{data.education}</p>
      </div>
    </div>
  );
});

export default ResumePreview;

