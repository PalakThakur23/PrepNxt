
import React, { useState } from "react";
import "../styles/MockInterview.css";

function MockInterview() {
  const [mode, setMode] = useState("manual");
  const [interviewType, setInterviewType] = useState("Technical");
  const [jobDescription, setJobDescription] = useState("");
  const [jobFile, setJobFile] = useState(null);
  const [interviewStarted, setInterviewStarted] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      setJobFile(file);
    }
  };

  const handleStartInterview = () => {
    setInterviewStarted(true);
  };

  return (
    <div className="mock-page">
      {/* Heading */}
      <header className="mock-heading">
        <div>
          <h1>Mock Interview</h1>
          <p>Practice today. Crack your dream interview tomorrow.</p>
        </div>

        <div className="mock-heading-icon">🎤</div>
      </header>

      {/* Interview mode selection */}
      <section className="mock-section">
        <h2>Choose Your Practice Mode</h2>
        <p className="mock-section-description">
          Select how you would like to prepare for your interview.
        </p>

        <div className="mock-mode-grid">
          <button
            className={`mock-mode-card ${
              mode === "manual" ? "selected" : ""
            }`}
            onClick={() => {
              setMode("manual");
              setInterviewStarted(false);
            }}
          >
            <div className="mock-mode-icon">📝</div>

            <div className="mock-mode-text">
              <h3>Manual Practice</h3>
              <p>
                Practise interview questions at your own pace.
                Build confidence and improve your answers.
              </p>
            </div>

            <span className="mock-radio">
              {mode === "manual" ? "✓" : ""}
            </span>
          </button>

          <button
            className={`mock-mode-card ${
              mode === "ai" ? "selected" : ""
            }`}
            onClick={() => {
              setMode("ai");
              setInterviewStarted(false);
            }}
          >
            <div className="mock-mode-icon">🤖</div>

            <div className="mock-mode-text">
              <h3>AI-Powered Interview</h3>
              <p>
                Experience an AI interview simulation and
                practise answering questions.
              </p>
            </div>

            <span className="mock-radio">
              {mode === "ai" ? "✓" : ""}
            </span>
          </button>
        </div>
      </section>

      {/* Interview type */}
      <section className="mock-section">
        <h2>Select Interview Type</h2>
        <p className="mock-section-description">
          Choose the type of interview you want to practise.
        </p>

        <div className="mock-type-grid">
          {[
            {
              name: "Technical",
              icon: "💻",
              description: "Coding, DSA and technical concepts",
            },
            {
              name: "HR",
              icon: "👥",
              description: "Behavioural and personal questions",
            },
            {
              name: "Aptitude",
              icon: "🧠",
              description: "Logical and quantitative reasoning",
            },
            {
              name: "Mixed",
              icon: "🎯",
              description: "A combination of interview topics",
            },
          ].map((type) => (
            <button
              key={type.name}
              className={`mock-type-card ${
                interviewType === type.name ? "selected" : ""
              }`}
              onClick={() => {
                setInterviewType(type.name);
                setInterviewStarted(false);
              }}
            >
              <span className="mock-type-icon">{type.icon}</span>
              <strong>{type.name}</strong>
              <small>{type.description}</small>
            </button>
          ))}
        </div>
      </section>

      {/* Job description */}
      <section className="mock-section mock-job-section">
        <h2>Job Description</h2>
        <p className="mock-section-description">
          Upload or paste a job description to customise your practice.
        </p>

        <label className="mock-upload-area">
          <input
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileChange}
          />

          <span className="mock-upload-icon">📄</span>
          <strong>Upload Job Description</strong>
          <span>PDF, DOC, DOCX or TXT</span>

          <span className="mock-upload-button">
            Browse Files
          </span>
        </label>

        {jobFile && (
          <div className="mock-file-name">
            <span>📎 {jobFile.name}</span>
            <button onClick={() => setJobFile(null)}>
              Remove
            </button>
          </div>
        )}

        <div className="mock-or-divider">
          <span>OR</span>
        </div>

        <textarea
          className="mock-job-textarea"
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={(event) => setJobDescription(event.target.value)}
          rows={5}
        />
      </section>

      {/* Start button */}
      <section className="mock-start-section">
        <button
          className="mock-start-button"
          onClick={handleStartInterview}
        >
          {interviewStarted ? "Practice Selected!" : "Start Mock Interview"}
          <span> →</span>
        </button>

        {interviewStarted && (
          <div className="mock-success-message">
            <strong>Your practice setup is ready!</strong>
            <p>
              Mode: {mode === "manual" ? "Manual Practice" : "AI-Powered Interview"}
              <br />
              Interview Type: {interviewType}
              <br />
              {jobFile
                ? `File selected: ${jobFile.name}`
                : jobDescription
                ? "Job description added."
                : "No job description added."}
            </p>
            <small>
              The actual interview session will be connected in a future
              backend integration.
            </small>
          </div>
        )}
      </section>

      {/* Feedback preview */}
      <section className="mock-feedback-card">
        <div className="mock-feedback-icon">⭐</div>

        <div>
          <h2>Improve With Every Practice</h2>
          <p>
            Review your performance, identify areas for improvement,
            and become interview-ready.
          </p>
        </div>
      </section>
    </div>
  );
}

export default MockInterview;
