
import React, { useState } from "react";
import "../styles/DailyMissions.css";

const todayMissions = [
  {
    id: 1,
    title: "Solve 5 Aptitude Questions",
    description: "Quantitative and Logical Reasoning",
    points: 15,
    status: "Completed",
  },
  {
    id: 2,
    title: "Practice 1 Coding Problem",
    description: "LeetCode / GFG",
    points: 20,
    status: "Completed",
  },
  {
    id: 3,
    title: "Watch 1 Interview Video",
    description: "Tell me about yourself",
    points: 15,
    status: "In Progress",
  },
  {
    id: 4,
    title: "Join a Discussion on Campus Forum",
    description: "Share your doubts / help others",
    points: 10,
    status: "Pending",
  },
];

const pastMissions = [
  {
    id: 5,
    title: "Complete 2 Coding Challenges",
    description: "Arrays and Strings",
    points: 20,
    status: "Completed",
  },
  {
    id: 6,
    title: "Revise Operating Systems",
    description: "Processes and Threads",
    points: 15,
    status: "Completed",
  },
  {
    id: 7,
    title: "Practice Communication Skills",
    description: "Self introduction practice",
    points: 10,
    status: "Completed",
  },
];

function DailyMissions() {
  const [activeTab, setActiveTab] = useState("today");
  const [missions, setMissions] = useState(todayMissions);
  const [quizStarted, setQuizStarted] = useState(false);

  const displayedMissions =
    activeTab === "today" ? missions : pastMissions;

  const completedCount = missions.filter(
    (mission) => mission.status === "Completed"
  ).length;

  const updateMissionStatus = (id) => {
    setMissions((previousMissions) =>
      previousMissions.map((mission) => {
        if (mission.id !== id) return mission;

        const nextStatus =
          mission.status === "Pending"
            ? "In Progress"
            : mission.status === "In Progress"
            ? "Completed"
            : "In Progress";

        return { ...mission, status: nextStatus };
      })
    );
  };

  return (
    <div className="daily-page">
      {/* Page heading */}
      <div className="daily-heading">
        <div>
          <h1>Daily Missions</h1>
          <p>Small steps. Big results.</p>
        </div>

        <div className="daily-date">
          <span>Today</span>
          <strong>29 OCT 2026</strong>
        </div>
      </div>

      {/* Points and motivation cards */}
      <section className="daily-top-cards">
        <div className="points-card">
          <div className="medal-icon">🏅</div>

          <div className="points-content">
            <h2>Your Points</h2>
            <strong>250</strong>
            <a href="#redeem" onClick={(e) => e.preventDefault()}>
              Redeem Points →
            </a>
          </div>
        </div>

        <div className="motivation-card">
          <div className="motivation-icon">🎯</div>
          <h2>
            Stay consistent!
            <br />
            You're doing great!
          </h2>
          <div className="motivation-person">👩🏻‍💻</div>
        </div>
      </section>

      {/* Mission tabs */}
      <div className="mission-tabs">
        <button
          className={activeTab === "today" ? "active" : ""}
          onClick={() => setActiveTab("today")}
        >
          Today's Missions
        </button>

        <button
          className={activeTab === "past" ? "active" : ""}
          onClick={() => setActiveTab("past")}
        >
          Past Missions
        </button>
      </div>

      {/* Mission list */}
      <section className="mission-list">
        {displayedMissions.map((mission) => (
          <article className="mission-card" key={mission.id}>
            <div className="mission-info">
              <h3>{mission.title}</h3>
              <p>{mission.description}</p>
            </div>

            <strong className="mission-points">
              +{mission.points} pts
            </strong>

            <button
              className={`mission-status ${mission.status
                .toLowerCase()
                .replace(" ", "-")}`}
              onClick={() =>
                activeTab === "today" &&
                updateMissionStatus(mission.id)
              }
              disabled={activeTab === "past"}
              title={
                activeTab === "today"
                  ? "Click to update mission status"
                  : "Past mission"
              }
            >
              {mission.status}
            </button>
          </article>
        ))}
      </section>

      {/* Bottom cards */}
      <section className="daily-bottom-cards">
        <div className="quiz-card">
          <div className="quiz-icon">💡</div>

          <div className="quiz-content">
            <h2>Today's Quiz</h2>
            <p>Aptitude Quiz – 10 Questions</p>

            <button
              className="quiz-button"
              onClick={() => setQuizStarted(!quizStarted)}
            >
              {quizStarted ? "Quiz Started!" : "Attempt Quiz"}
            </button>

            {quizStarted && (
              <p className="quiz-message">
                Your aptitude quiz is ready!
              </p>
            )}
          </div>
        </div>

        <div className="achievement-card">
          <div className="trophy-icon">🏆</div>

          <div>
            <h2>
              You're doing
              <br />
              amazing!
            </h2>
            <p>
              {completedCount} of {missions.length} missions completed
            </p>
          </div>

          <span className="achievement-star">✦</span>
        </div>
      </section>
    </div>
  );
}

export default DailyMissions;
