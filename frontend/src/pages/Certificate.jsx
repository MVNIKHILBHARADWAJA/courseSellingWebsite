import React from 'react';
import './Certificate.css';
//diaplay certifficate when 100% progress

const Certificate = () => {
  return (
    <div className="certificate-page">
      <div className="certificate-preview">
        <h1>Certificate of Completion</h1>
        <p>This certifies that</p>
        <h2>Nikhil Bharadwaja</h2>
        <p>has successfully completed the course</p>
        <h3>Full Stack Web Development</h3>
        <p>Date: June 28, 2025</p>
      </div>

      <button
        onClick={() => window.print()}
        className="download-button"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
