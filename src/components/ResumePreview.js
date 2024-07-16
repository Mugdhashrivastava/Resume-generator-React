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
          <h2 className="section-header">CONTACT</h2> 
          <p>
            {/* <strong>Location:</strong>  */}
            {data.location}
          </p>
          <p>
            {/* <strong>Email:</strong>  */}
            {data.email}
          </p>
          <h2 className="section-header">SUMMARY</h2>
          <p>{data.summary}</p>
         
          <h2 className="section-header">Skills</h2>
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-column">
        <h1 className="name">{data.firstName} {data.lastName}</h1>
        <p className="current-employer">{data.currentEmployer}</p>
        <p className="title">{data.title}</p>

        <h2 className="blue-header">Experience</h2>
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

        <h2 className="blue-header">Education</h2>
        <p>{data.education}</p>
      </div>
    </div>
  );
});

export default ResumePreview;
