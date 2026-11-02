
import React, { useMemo, useState } from "react";
import "../styles/SubjectsLearning.css";

const subjects = [
  {
    id: 1,
    name: "Coding",
    description: "DSA, Programming, Problem Solving",
    completed: 3,
    total: 12,
    category: "Coding",
    topics: ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues"],
  },
  {
    id: 2,
    name: "Aptitude",
    description: "Quant, Logical & Verbal",
    completed: 5,
    total: 10,
    category: "Aptitude",
    topics: [
      "Number Systems",
      "Percentages",
      "Time and Work",
      "Logical Reasoning",
    ],
  },
  {
    id: 3,
    name: "System Design",
    description: "Architecture, Scalability",
    completed: 2,
    total: 8,
    category: "System Design",
    topics: [
      "System Design Basics",
      "Load Balancing",
      "Caching",
      "Database Scaling",
    ],
  },
  {
    id: 4,
    name: "DBMS",
    description: "SQL, PL/SQL",
    completed: 4,
    total: 10,
    category: "Core Subjects",
    topics: [
      "DBMS Basics",
      "SQL Queries",
      "Normalization",
      "Transactions",
    ],
  },
  {
    id: 5,
    name: "Operating Systems",
    description: "Processes, Scheduling",
    completed: 3,
    total: 8,
    category: "Core Subjects",
    topics: [
      "Processes",
      "Threads",
      "CPU Scheduling",
      "Deadlocks",
    ],
  },
  {
    id: 6,
    name: "Computer Networks",
    description: "HTTP, TLS, Protocols",
    completed: 2,
    total: 7,
    category: "Core Subjects",
    topics: [
      "OSI Model",
      "TCP/IP",
      "HTTP and HTTPS",
      "Network Security",
    ],
  },
  {
    id: 7,
    name: "Core Subjects",
    description: "DBMS, OS, CN, and more",
    completed: 4,
    total: 12,
    category: "Core Subjects",
    topics: [
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    id: 8,
    name: "Communication Skills",
    description: "Resume, Group Discussions",
    completed: 2,
    total: 8,
    category: "Communication",
    topics: [
      "Resume Building",
      "Group Discussions",
      "Public Speaking",
      "Interview Communication",
    ],
  },
];

const categories = [
  "All",
  "Coding",
  "Aptitude",
  "System Design",
  "Core Subjects",
  "Communication",
];

const resources = [
  {
    name: "Striver's DSA Sheet",
    url: "https://takeuforward.org/",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/",
  },
  {
    name: "LeetCode Practice",
    url: "https://leetcode.com/problemset/",
  },
  {
    name: "NeetCode Roadmap",
    url: "https://neetcode.io/roadmap",
  },
];

function SubjectsLearning() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSubject, setExpandedSubject] = useState(null);

  const filteredSubjects = useMemo(() => {
    return subjects.filter((subject) => {
      const matchesCategory =
        activeCategory === "All" ||
        subject.category === activeCategory;

      const matchesSearch =
        subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subject.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const toggleSubject = (id) => {
    setExpandedSubject((current) => (current === id ? null : id));
  };

  return (
    <div className="subjects-page">
      {/* Page heading */}
      <div className="subjects-heading">
        <h1>Subjects &amp; Learning Path</h1>
        <p>Follow a structured path to master each subject.</p>
      </div>

      <div className="subjects-layout">
        {/* Main subjects section */}
        <main className="subjects-main">
          {/* Search */}
          <div className="subjects-search">
            <input
              type="text"
              placeholder="Search subjects..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search subjects"
            />
          </div>

          {/* Category filters */}
          <div className="subject-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "selected" : ""
                }
                onClick={() => {
                  setActiveCategory(category);
                  setExpandedSubject(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Subject cards */}
          <div className="subject-grid">
            {filteredSubjects.length > 0 ? (
              filteredSubjects.map((subject) => {
                const progress =
                  (subject.completed / subject.total) * 100;

                const isExpanded = expandedSubject === subject.id;

                return (
                  <article
                    className={`subject-card ${
                      isExpanded ? "expanded" : ""
                    }`}
                    key={subject.id}
                  >
                    <button
                      className="subject-card-header"
                      onClick={() => toggleSubject(subject.id)}
                      aria-expanded={isExpanded}
                    >
                      <div>
                        <h2>{subject.name}</h2>
                        <p>{subject.description}</p>
                      </div>

                      <span className="subject-arrow">
                        {isExpanded ? "⌄" : "›"}
                      </span>
                    </button>

                    <div className="subject-progress-text">
                      {subject.completed} of {subject.total} Topics
                    </div>

                    <div
                      className="subject-progress-track"
                      role="progressbar"
                      aria-valuenow={subject.completed}
                      aria-valuemin={0}
                      aria-valuemax={subject.total}
                      aria-label={`${subject.name} progress`}
                    >
                      <div
                        className="subject-progress-fill"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    {isExpanded && (
                      <div className="subject-topic-list">
                        <h3>Topics to learn</h3>

                        {subject.topics.map((topic, index) => (
                          <div className="subject-topic" key={topic}>
                            <span>
                              {index < subject.completed ? "✓" : "○"}
                            </span>
                            {topic}
                          </div>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })
            ) : (
              <div className="subjects-empty">
                <h3>No subjects found</h3>
                <p>Try another search or select a different category.</p>
              </div>
            )}
          </div>
        </main>

        {/* Right sidebar */}
        <aside className="subjects-sidebar">
          {/* Featured learning path */}
          <section className="featured-learning-card">
            <h2>Featured Learning Path</h2>

            <div className="featured-illustration">
              <div className="featured-art-icon">💻</div>
              <div className="featured-art-person">👩🏻‍💻</div>
              <div className="featured-art-decoration">✦</div>
            </div>

            <h3>DSA For Placements</h3>
            <p>8 weeks · 12 Topics</p>

            <button
              className="start-learning-button"
              onClick={() => {
                setActiveCategory("Coding");
                setSearchTerm("");
                setExpandedSubject(1);
              }}
            >
              Start Learning
            </button>
          </section>

          {/* Resources */}
          <section className="subjects-resources-card">
            <h2>Resources</h2>

            <div className="subjects-resource-links">
              {resources.map((resource) => (
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={resource.name}
                >
                  {resource.name}
                </a>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default SubjectsLearning;
