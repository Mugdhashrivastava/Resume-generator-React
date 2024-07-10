import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ResumePreview from './ResumePreview';

const ResumePage = ({ location }) => {
  const resumeRef = useRef();
  const { data } = location.state;

  return (
    <div>
      <ResumePreview ref={resumeRef} data={data} />
      <ReactToPrint
        trigger={() => <button>Download as PDF</button>}
        content={() => resumeRef.current}
      />
    </div>
  );
};

export default ResumePage;
