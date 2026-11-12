import { useState } from "react";
import "../styles/SkillGapAnalysis.css";

const skillData = [
  { name: "DSA", yourLevel: 90, companyLevel: 100 },
  { name: "Aptitude", yourLevel: 85, companyLevel: 100 },
  { name: "SD", yourLevel: 80, companyLevel: 100 },
  { name: "DBMS", yourLevel: 75, companyLevel: 100 },
  { name: "Comms", yourLevel: 70, companyLevel: 100 },
];

const strengths = [
  {
    title: "Data Structures & Algorithms",
    description: "Good problem-solving ability and coding fundamentals.",
  },
  {
    title: "Database Management",
    description: "You have a good understanding of SQL and database concepts.",
  },
  {
    title: "Programming",
    description: "You demonstrate consistent programming knowledge.",
  },
];

const improvements = [
  {
    title: "Aptitude (Quant)",
    description:
      "Practice more numerical reasoning and data interpretation.",
  },
  {
    title: "System Design",
    description:
      "Study scalable design patterns and architecture principles.",
  },
  {
    title: "Communication",
    description:
      "Build confidence in group discussions and presentations.",
  },
];

const suggestions = [
  {
    title: "Solve 5 Aptitude quizzes daily",
    improvement: "+15%",
  },
  {
    title: "Complete the System Design roadmap",
    improvement: "+20%",
  },
  {
    title: "Join a Group Discussion practice session",
    improvement: "+25%",
  },
];

function SkillGapAnalysis() {
  const [activeTab, setActiveTab] = useState("improvements");
  const [showReport, setShowReport] = useState(false);

  const displayedSkills =
    activeTab === "strengths" ? strengths : improvements;

  return (
    <main className="skill-gap-page">
      <header className="skill-gap-heading">
        <h1>Skill Gap &amp; Readiness</h1>
        <p>Understand where you stand and what to focus on next.</p>
      </header>

      <div className="skill-gap-top-grid">
        <section className="skill-panel readiness-panel">
          <h2>Overall Readiness</h2>

          <div className="readiness-score">
            <div
              className="readiness-ring"
              role="img"
              aria-label="Overall readiness score 72 out of 100"
            >
              <div className="readiness-ring-inner" />
            </div>

            <div className="readiness-number">
              <strong>72</strong>
              <span>/100</span>
            </div>
          </div>

          <p className="readiness-message">
            You're doing well — keep the momentum going.
            <br />
            Focus on Aptitude &amp; System Design to level up.
          </p>
        </section>

        <section className="skill-panel comparison-panel">
          <h2>Skill Comparison</h2>
          <p className="panel-subtitle">vs. Company Requirements</p>

          <div className="comparison-legend">
            <span>
              <i className="legend-square your-legend" />
              Your level
            </span>
            <span>
              <i className="legend-square company-legend" />
              Company Level
            </span>
          </div>

          <div className="comparison-bars">
            {skillData.map((skill) => (
              <div className="comparison-row" key={skill.name}>
                <span className="comparison-label">{skill.name}</span>

                <div
                  className="comparison-track"
                  role="img"
                  aria-label={`${skill.name}: your level ${skill.yourLevel}%, company requirement ${skill.companyLevel}%`}
                >
                  <div
                    className="comparison-company-bar"
                    style={{ width: `${skill.companyLevel}%` }}
                  />
                  <div
                    className="comparison-your-bar"
                    style={{ width: `${skill.yourLevel}%` }}
                  />
                </div>

                <strong className="comparison-value">
                  {skill.yourLevel}%
                </strong>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="skill-gap-bottom-grid">
        <section className="skill-panel gap-analysis-panel">
          <h2>Skill Gap Analysis</h2>

          <div className="skill-analysis-tabs">
            <button
              className={activeTab === "strengths" ? "active" : ""}
              onClick={() => setActiveTab("strengths")}
            >
              Strength
            </button>

            <button
              className={activeTab === "improvements" ? "active" : ""}
              onClick={() => setActiveTab("improvements")}
            >
              Needs Improvement
            </button>
          </div>

          <div className="gap-list">
            {displayedSkills.map((skill) => (
              <article
                className={`gap-item ${
                  activeTab === "strengths" ? "strength-item" : ""
                }`}
                key={skill.title}
              >
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skill-panel suggestions-panel">
          <h2>Personalized Suggestions</h2>

          <div className="suggestions-list">
            {suggestions.map((suggestion) => (
              <article className="suggestion-item" key={suggestion.title}>
                <h3>{suggestion.title}</h3>
                <p>Estimated {suggestion.improvement} score improvement</p>
              </article>
            ))}
          </div>

          <button
            className="full-report-btn"
            onClick={() => setShowReport(true)}
          >
            View Full Report
          </button>
        </section>
      </div>

      {showReport && (
        <div
          className="skill-report-overlay"
          onClick={() => setShowReport(false)}
        >
          <section
            className="skill-report-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-report-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="skill-report-close"
              onClick={() => setShowReport(false)}
              aria-label="Close report"
            >
              ×
            </button>

            <span className="report-eyebrow">PREPNXT SKILL REPORT</span>
            <h2 id="skill-report-title">Your Readiness Report</h2>

            <div className="report-score">
              <strong>72/100</strong>
              <span>Overall Readiness</span>
            </div>

            <h3>Skill levels</h3>
            {skillData.map((skill) => (
              <div className="report-skill-row" key={skill.name}>
                <span>{skill.name}</span>
                <strong>{skill.yourLevel}%</strong>
              </div>
            ))}

            <h3>Recommended focus areas</h3>
            <ul>
              <li>Practice quantitative aptitude regularly.</li>
              <li>Complete the System Design learning roadmap.</li>
              <li>Improve communication through group discussions.</li>
            </ul>

            <p className="report-note">
              This report uses sample frontend data. Your actual readiness
              score will be connected to your learning progress later.
            </p>

            <button
              className="full-report-btn report-done-btn"
              onClick={() => setShowReport(false)}
            >
              Close Report
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default SkillGapAnalysis;