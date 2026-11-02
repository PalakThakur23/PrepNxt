import "../styles/Dashboard.css";
import {
  Flame,
  Code,
  BookOpen,
  FileText,
  Palette,
  ArrowRight
} from "lucide-react";

function Dashboard() {

  const progress = [
    { name: "Coding", percentage: 68, icon: Code },
    { name: "Aptitude", percentage: 72, icon: BookOpen },
    { name: "System Design", percentage: 60, icon: Palette },
    { name: "Resume", percentage: 56, icon: FileText }
  ];

  const activities = [
    "Completed Mock Interview – System Design",
    "Studied: Binary Search Trees (1.5 hrs)",
    "Solved 5 DSA problems on LeetCode"
  ];

  const companies = [
    { name: "TCS – Ninja (B.Tech)", date: "25 Oct 2029" },
    { name: "Infosys – Systems Engineer", date: "30 Oct 2029" },
    { name: "Google – STEP Internship", date: "1 Nov 2029" }
  ];

  return (
    <div className="dashboard-page">

      <div className="welcome-section">
        <h1>Hi there, Palak! 👋</h1>
        <p>Your hard work today builds your success tomorrow.</p>
      </div>

      {/* Score and streak */}

      <div className="overview-grid">

        <div className="readiness-card">
          <div className="score-circle">
            77
          </div>

          <div>
            <h2>Placement Readiness Score</h2>
            <span className="score-label">Good Progress</span>
          </div>
        </div>

        <div className="streak-card">
          <h3>Weekly Streak</h3>
          <h2>5 Days <Flame size={24} color="#F97316" /></h2>

          <div className="streak-dots">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <span
                key={day}
                className={day <= 5 ? "completed-dot" : ""}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Preparation Progress */}

      <section className="progress-section">

        <h2>Preparation Progress</h2>

        <div className="progress-grid">

          {progress.map((item) => {
            const Icon = item.icon;

            return (
              <div className="progress-card" key={item.name}>

                <Icon size={22} />

                <h3>{item.name}</h3>

                <h2>{item.percentage}%</h2>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* Bottom section */}

      <div className="bottom-grid">

        <section className="company-section">
          <h2>Upcoming Placement Drives</h2>

          {companies.map((company) => (
            <div className="company-item" key={company.name}>
              <div className="company-icon">
                {company.name.charAt(0)}
              </div>

              <div>
                <h4>{company.name}</h4>
                <p>Apply by: {company.date}</p>
              </div>
            </div>
          ))}

        </section>

        <div className="right-column">

          <section className="next-step-card">
            <h2>Your Next Step</h2>
            <p>Practice 10 Coding Problems (DSA)</p>

            <button>
              Start Now <ArrowRight size={17} />
            </button>
          </section>

          <section className="activity-section">
            <h2>Recent Activity</h2>

            {activities.map((activity, index) => (
              <p key={index}>✓ {activity}</p>
            ))}

          </section>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;