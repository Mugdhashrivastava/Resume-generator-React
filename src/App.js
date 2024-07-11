import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState(null);
  const handleSave = (data) => {
    setResumeData(data);
  };

  return (
    <Router>
      <div className="App">
        <h1>Resume Generator</h1>
        <Routes>
          <Route path="/" element={<ResumeForm onSave={handleSave} />} />
          <Route path="/preview" element={<ResumePreviewPage resumeData={resumeData} />} />
        </Routes>
      </div>
    </Router>
  );
};

const ResumePreviewPage = ({ resumeData }) => {
  const resumeRef = useRef();

  return (
    <>
      <Link to="/">Back to Form</Link>
      <ResumePreview ref={resumeRef} data={resumeData} />
      <ReactToPrint
        trigger={() => <button>Download as PDF</button>}
        content={() => resumeRef.current}
      />
    </>
  );
};

export default App;
