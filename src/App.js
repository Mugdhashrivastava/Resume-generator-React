
import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState(null);
  const resumeRef = useRef();

  const handleSave = (data) => {
    setResumeData(data);
  };

  return (
    <div className="App">
      <h1>Resume Generator</h1>
      <ResumeForm onSave={handleSave} />
      {resumeData && (
        <>
          <ResumePreview ref={resumeRef} data={resumeData} />
          <ReactToPrint
            trigger={() => <button>Download as PDF</button>}
            content={() => resumeRef.current}
          />
        </>
      )}
    </div>
  );
};

export default App;



