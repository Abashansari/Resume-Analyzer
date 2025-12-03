import React from 'react'
import advertisement from '/advertisement.png'

export default function LandingPage() {
  return (
       <div className="container">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-md-6 text-center text-md-start mt-3">
          <img src={advertisement} className="img-fluid mb-4 rounded" alt="Resume Illustration" />
        </div>

        {/* Right Section (Upload Box) */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-5 bg-white shadow rounded-4 text-center" style={{ width: 350 }} >
            <button className="btn btn-primary px-4 py-2">
              Upload Resume (PDF/DOC)
            </button>

            <p className="text-muted mt-2">
              or drag & drop your file <br />
              Supported: <strong>PDF, DOCX</strong>
            </p>

            <hr />

            <p className="text-muted small">
              Get: Resume Score, ATS Match,  
              Grammar Fixes, Skill Extraction, and Job Suggestions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
