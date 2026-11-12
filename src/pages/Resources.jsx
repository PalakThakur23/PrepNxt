import { useMemo, useState } from "react";
import "../styles/Resources.css";

const resources = [
  {
    id: 1,
    title: "Data Structures & Algorithms Notes",
    description:
      "Revise arrays, linked lists, trees, graphs, sorting and searching with concise explanations.",
    category: "DSA",
    type: "Study Notes",
    level: "Beginner",
    icon: "📘",
    duration: "12 topics",
    link: "https://www.geeksforgeeks.org/data-structures/",
  },
  {
    id: 2,
    title: "Complete DSA Practice Sheet",
    description:
      "A structured collection of coding problems to strengthen your problem-solving skills.",
    category: "DSA",
    type: "Practice",
    level: "Intermediate",
    icon: "💻",
    duration: "450+ problems",
    link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  },
  {
    id: 3,
    title: "Aptitude Preparation Guide",
    description:
      "Prepare for quantitative aptitude, logical reasoning and verbal ability rounds.",
    category: "Aptitude",
    type: "Study Notes",
    level: "Beginner",
    icon: "🧠",
    duration: "8 topics",
    link: "https://www.indiabix.com/",
  },
  {
    id: 4,
    title: "System Design Fundamentals",
    description:
      "Understand scalability, databases, caching, load balancing and system architecture.",
    category: "System Design",
    type: "Video Course",
    level: "Advanced",
    icon: "🏗️",
    duration: "10 lessons",
    link: "https://roadmap.sh/system-design",
  },
  {
    id: 5,
    title: "SQL Interview Questions",
    description:
      "Practice SQL queries, joins, subqueries, aggregation and database interview concepts.",
    category: "Core Subjects",
    type: "Practice",
    level: "Intermediate",
    icon: "🗄️",
    duration: "100+ questions",
    link: "https://www.hackerrank.com/domains/sql",
  },
  {
    id: 6,
    title: "Operating Systems Interview Guide",
    description:
      "Review processes, threads, scheduling, memory management and deadlocks.",
    category: "Core Subjects",
    type: "Study Notes",
    level: "Intermediate",
    icon: "⚙️",
    duration: "9 topics",
    link: "https://www.geeksforgeeks.org/operating-systems/",
  },
  {
    id: 7,
    title: "Resume Building Guide",
    description:
      "Learn how to present your projects, skills and achievements in a clear resume.",
    category: "Career",
    type: "Guide",
    level: "Beginner",
    icon: "📄",
    duration: "15 min read",
    link: "https://www.overleaf.com/learn/latex/Creating_a_document_in_LaTeX",
  },
  {
    id: 8,
    title: "HR Interview Preparation",
    description:
      "Prepare answers for common HR questions and learn how to communicate confidently.",
    category: "Interview",
    type: "Guide",
    level: "Beginner",
    icon: "🎤",
    duration: "30 questions",
    link: "https://www.themuse.com/advice/interview-questions-and-answers",
  },
  {
    id: 9,
    title: "Java Programming Roadmap",
    description:
      "Follow a learning path covering Java basics, OOP, collections and advanced concepts.",
    category: "Programming",
    type: "Roadmap",
    level: "Beginner",
    icon: "☕",
    duration: "Learning path",
    link: "https://roadmap.sh/java",
  },
];

const categories = [
  "All Resources",
  "DSA",
  "Aptitude",
  "System Design",
  "Core Subjects",
  "Programming",
  "Interview",
  "Career",
];

const types = ["All Types", "Study Notes", "Practice", "Video Course", "Guide", "Roadmap"];

function Resources() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Resources");
  const [type, setType] = useState("All Types");
  const [bookmarks, setBookmarks] = useState([]);
  const [savedOnly, setSavedOnly] = useState(false);

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase()) ||
        resource.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All Resources" || resource.category === category;

      const matchesType = type === "All Types" || resource.type === type;

      const matchesSaved = !savedOnly || bookmarks.includes(resource.id);

      return matchesSearch && matchesCategory && matchesType && matchesSaved;
    });
  }, [search, category, type, savedOnly, bookmarks]);

  const toggleBookmark = (id) => {
    setBookmarks((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <main className="resources-page">
      <header className="resources-heading">
        <div>
          <span className="resources-eyebrow">YOUR LEARNING LIBRARY</span>
          <h1>Learning Resources</h1>
          <p>
            Everything you need to learn, practice and prepare for your dream
            placement.
          </p>
        </div>
        <div className="resources-heading-icon" aria-hidden="true">
          📚
        </div>
      </header>

      <section className="resources-featured">
        <div className="featured-content">
          <span className="featured-label">FEATURED LEARNING PATH</span>
          <h2>Your Placement Preparation Roadmap</h2>
          <p>
            Follow a structured path from programming fundamentals to
            interviews. Build skills one step at a time.
          </p>
          <a
            href="https://roadmap.sh/"
            target="_blank"
            rel="noreferrer"
            className="featured-button"
          >
            Explore Roadmaps <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="featured-illustration" aria-hidden="true">
          <span>🎯</span>
          <span>📖</span>
          <span>🚀</span>
        </div>
      </section>

      <section className="resources-stats">
        <div className="resource-stat">
          <span className="resource-stat-icon">📚</span>
          <div>
            <strong>{resources.length}</strong>
            <span>Learning Resources</span>
          </div>
        </div>
        <div className="resource-stat">
          <span className="resource-stat-icon">📂</span>
          <div>
            <strong>{categories.length - 1}</strong>
            <span>Categories</span>
          </div>
        </div>
        <div className="resource-stat">
          <span className="resource-stat-icon">🔖</span>
          <div>
            <strong>{bookmarks.length}</strong>
            <span>Saved Resources</span>
          </div>
        </div>
      </section>

      <section className="resources-library">
        <div className="resources-library-heading">
          <div>
            <h2>Explore Resources</h2>
            <p>Find the right material for your preparation.</p>
          </div>
          <button
            className={`saved-toggle ${savedOnly ? "selected" : ""}`}
            onClick={() => setSavedOnly((value) => !value)}
          >
            <span aria-hidden="true">🔖</span>
            {savedOnly ? "Show All" : "Saved"}
          </button>
        </div>

        <div className="resources-search-row">
          <label className="resources-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search notes, topics, guides..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search resources"
            />
          </label>

          <select
            className="resources-type-select"
            value={type}
            onChange={(event) => setType(event.target.value)}
            aria-label="Filter by resource type"
          >
            {types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="resources-category-list">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="resources-results-heading">
          <h3>{savedOnly ? "Your Saved Resources" : "Recommended for You"}</h3>
          <span>{filteredResources.length} resources found</span>
        </div>

        {filteredResources.length > 0 ? (
          <div className="resources-grid">
            {filteredResources.map((resource) => (
              <article className="resource-card" key={resource.id}>
                <div className="resource-card-top">
                  <div className="resource-icon">{resource.icon}</div>
                  <button
                    className={`bookmark-button ${
                      bookmarks.includes(resource.id) ? "bookmarked" : ""
                    }`}
                    onClick={() => toggleBookmark(resource.id)}
                    aria-label={
                      bookmarks.includes(resource.id)
                        ? `Remove ${resource.title} from saved resources`
                        : `Save ${resource.title}`
                    }
                    title={
                      bookmarks.includes(resource.id)
                        ? "Remove bookmark"
                        : "Save resource"
                    }
                  >
                    {bookmarks.includes(resource.id) ? "♥" : "♡"}
                  </button>
                </div>

                <div className="resource-tags">
                  <span>{resource.category}</span>
                  <span>{resource.type}</span>
                </div>

                <h3>{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>

                <div className="resource-card-meta">
                  <span>◷ {resource.duration}</span>
                  <span>{resource.level}</span>
                </div>

                <a
                  className="resource-open-button"
                  href={resource.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore Resource <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="resources-empty">
            <span>🔎</span>
            <h3>No resources found</h3>
            <p>Try another search or change your selected filters.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All Resources");
                setType("All Types");
                setSavedOnly(false);
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Resources;