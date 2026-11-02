
import { useState } from "react";
import { ChevronRight, BookOpen } from "lucide-react";
import "../styles/Tracker.css";

function PreparationTracker() {

  // State for category filters
  const [activeFilter, setActiveFilter] = useState("All");

  // State for individual subject expansion
  const [expandedSubject, setExpandedSubject] = useState(null);

  // State for expanding all subject details
  const [showAllDetails, setShowAllDetails] = useState(false);

  // Category filters
  const filters = [
    "All",
    "Coding",
    "Aptitude",
    "System Design",
    "Core Subjects",
    "Communication"
  ];

  // Subject progress data
  const subjects = [
    {
      name: "Coding",
      description: "DSA, Programming, Problem Solving",
      percentage: 65,
      next: "Graphs & Trees",
      completed: "8 of 12 topics",
      topics: [
        "Arrays",
        "Strings",
        "Linked Lists",
        "Stacks & Queues",
        "Trees",
        "Graphs"
      ]
    },
    {
      name: "Aptitude",
      description: "Quantitative, Logical & Verbal Reasoning",
      percentage: 72,
      next: "Probability",
      completed: "7 of 10 topics",
      topics: [
        "Percentages",
        "Profit & Loss",
        "Time & Work",
        "Probability"
      ]
    },
    {
      name: "System Design",
      description: "Architecture & Scalability Principles",
      percentage: 45,
      next: "Design Patterns",
      completed: "4 of 8 topics",
      topics: [
        "System Architecture",
        "Scalability",
        "Load Balancing",
        "Design Patterns"
      ]
    },
    {
      name: "Core Subjects",
      description: "DBMS, Operating Systems & DAA",
      percentage: 60,
      next: "Security Fundamentals",
      completed: "6 of 10 topics",
      topics: [
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "DAA",
        "Security Fundamentals"
      ]
    },
    {
      name: "Communication",
      description: "Resume, Interview Etiquette & Soft Skills",
      percentage: 55,
      next: "Group Discussions",
      completed: "5 of 9 topics",
      topics: [
        "Resume Building",
        "Self Introduction",
        "Group Discussions",
        "Interview Etiquette"
      ]
    }
  ];

  // Filter subjects according to selected category
  const filteredSubjects =
    activeFilter === "All"
      ? subjects
      : subjects.filter(
          (subject) => subject.name === activeFilter
        );

  // Handle individual subject expansion
  const handleSubjectClick = (subjectName) => {
    setExpandedSubject(
      expandedSubject === subjectName ? null : subjectName
    );
  };

  // Handle all subject details
  const handleShowAllDetails = () => {
    setShowAllDetails(!showAllDetails);
    setExpandedSubject(null);
  };

  return (
    <div className="tracker-page">

      {/* Page Heading */}

      <div className="tracker-heading">
        <h1>Preparation Tracker</h1>
        <p>
          Track your progress and stay focused on what matters most.
        </p>
      </div>


      {/* Overall Progress */}

      <section className="overall-card">

        <div className="overall-left">
          <p>Overall Progress</p>

          <h1>80%</h1>

          <div className="overall-progress-bar">
            <div className="overall-progress-fill"></div>
          </div>
        </div>

        <div className="overall-divider"></div>

        <div className="completion-stats">

          <div>
            <p>Completed</p>
            <h2>34/50</h2>
          </div>

          <div>
            <p>Remaining</p>
            <h2>16/50</h2>
          </div>

        </div>

        <div className="overall-donut">
          <div className="donut-inner"></div>
        </div>

      </section>


      {/* Category Filters */}

      <div className="tracker-filters">

        {filters.map((filter) => (
          <button
            key={filter}
            className={
              activeFilter === filter
                ? "filter-btn selected"
                : "filter-btn"
            }
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}

      </div>


      {/* Subject Progress Cards */}

      <section className="subject-progress-list">

        {filteredSubjects.map((subject) => (

          <div
            className="subject-progress-card"
            key={subject.name}
          >

            {/* Subject Information */}

            <div className="subject-info">

              <h2>{subject.name}</h2>

              <p>{subject.description}</p>

              <div className="subject-progress-bar">
                <div
                  className="subject-progress-fill"
                  style={{
                    width: `${subject.percentage}%`
                  }}
                ></div>
              </div>

            </div>


            {/* Subject Percentage */}

            <div className="subject-percentage">
              {subject.percentage}%
            </div>


            {/* Next Recommended Topic */}

            <div className="next-topic">

              <p>Next up: {subject.next}</p>

              <button
                onClick={() =>
                  handleSubjectClick(subject.name)
                }
                aria-label={`View ${subject.name} learning path`}
              >
                <ChevronRight
                  size={27}
                  style={{
                    transform:
                      expandedSubject === subject.name ||
                      showAllDetails
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                    transition: "0.2s"
                  }}
                />
              </button>

            </div>


            {/* Individual Subject Details */}

            {(showAllDetails ||
              expandedSubject === subject.name) && (

              <div className="topic-details">

                <h3>
                  <BookOpen size={19} />
                  {subject.name} Learning Path
                </h3>

                <p>{subject.completed}</p>

                <ul>
                  {subject.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>

              </div>

            )}

          </div>

        ))}

      </section>


      {/* View All Learning Path Button */}

      <button
        className="learning-path-btn"
        onClick={handleShowAllDetails}
      >
        {showAllDetails
          ? "Hide Detailed Learning Path"
          : "View Detailed Learning Path"}
      </button>

    </div>
  );
}

export default PreparationTracker;
