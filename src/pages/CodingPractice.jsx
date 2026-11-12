import { useMemo, useState } from "react";
import "../styles/CodingPractice.css";

const codingTopics = [
  {
    name: "Two Pointers",
    icon: "↟",
    count: 4,
    description: "Use two pointers to solve problems like pairs, subarrays and more.",
    problems: ["Two Sum II", "3Sum", "Container With Most Water", "Valid Palindrome"],
  },
  {
    name: "Sliding Window",
    icon: "⛶",
    count: 3,
    description: "Find optimal subarrays or substrings using a sliding window.",
    problems: ["Maximum Sum Subarray", "Longest Substring Without Repeating Characters", "Minimum Window Substring"],
  },
  {
    name: "Prefix Sum",
    icon: "Σ",
    count: 3,
    description: "Use prefix sums to solve range queries and subarray problems.",
    problems: ["Range Sum Query", "Subarray Sum Equals K", "Product of Array Except Self"],
  },
  {
    name: "Fast & Slow Pointers",
    icon: "◴",
    count: 3,
    description: "Detect cycles and find middle nodes in linked lists.",
    problems: ["Linked List Cycle", "Middle of the Linked List", "Happy Number"],
  },
  {
    name: "Monotonic Stack",
    icon: "▱",
    count: 3,
    description: "Solve next greater/smaller element and other stack-based problems.",
    problems: ["Next Greater Element", "Daily Temperatures", "Largest Rectangle in Histogram"],
  },
  {
    name: "Tree Traversal",
    icon: "♧",
    count: 3,
    description: "Explore preorder, inorder, postorder and level-order traversals.",
    problems: ["Binary Tree Inorder Traversal", "Maximum Depth of Binary Tree", "Binary Tree Level Order Traversal"],
  },
  {
    name: "Graph Traversal",
    icon: "♧",
    count: 3,
    description: "Use BFS and DFS to solve graph-related problems.",
    problems: ["Number of Islands", "Clone Graph", "Course Schedule"],
  },
  {
    name: "Dynamic Programming",
    icon: "✿",
    count: 2,
    description: "Solve problems by breaking them into sub-problems.",
    problems: ["Climbing Stairs", "Longest Increasing Subsequence"],
  },
  {
    name: "Binary Search",
    icon: "⌕",
    count: 2,
    description: "Find elements efficiently in sorted arrays.",
    problems: ["Binary Search", "Search in Rotated Sorted Array"],
  },
  {
    name: "Sorting",
    icon: "≡",
    count: 2,
    description: "Practice different sorting techniques and their variations.",
    problems: ["Merge Sort", "Quick Sort"],
  },
  {
    name: "Bit Manipulation",
    icon: "▣",
    count: 2,
    description: "Solve problems using bitwise operators.",
    problems: ["Single Number", "Number of 1 Bits"],
  },
  {
    name: "More Patterns",
    icon: "☆",
    count: 1,
    description: "Explore advanced patterns and novel concepts.",
    problems: ["Explore Advanced Patterns"],
  },
];

const categories = [
  "Arrays",
  "Patterns",
  "Strings",
  "Linked List",
  "Stack & Queue",
  "Tree",
  "Graph",
  "Dynamic Programming",
  "Searching & Sorting",
];

const categoryTopics = {
  Arrays: [
    "Two Pointers",
    "Sliding Window",
    "Prefix Sum",
    "Binary Search",
    "Sorting",
  ],
  Patterns: codingTopics.map((topic) => topic.name),
  Strings: ["Two Pointers", "Sliding Window", "Prefix Sum", "More Patterns"],
  "Linked List": ["Fast & Slow Pointers", "Two Pointers", "More Patterns"],
  "Stack & Queue": ["Monotonic Stack", "More Patterns"],
  Tree: ["Tree Traversal", "Binary Search", "More Patterns"],
  Graph: ["Graph Traversal", "More Patterns"],
  "Dynamic Programming": ["Dynamic Programming", "More Patterns"],
  "Searching & Sorting": ["Binary Search", "Sorting", "More Patterns"],
};

function CodingPractice() {
  const [activeCategory, setActiveCategory] = useState("Patterns");
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [completedProblems, setCompletedProblems] = useState([]);

  const visibleTopics = useMemo(() => {
    const allowedTopics = categoryTopics[activeCategory] || [];

    return codingTopics.filter((topic) => {
      const belongsToCategory = allowedTopics.includes(topic.name);
      const matchesSearch =
        topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.problems.some((problem) =>
          problem.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return belongsToCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const toggleCompleted = (problem) => {
    setCompletedProblems((current) =>
      current.includes(problem)
        ? current.filter((item) => item !== problem)
        : [...current, problem]
    );
  };

  return (
    <main className="coding-page">
      <aside className="coding-topic-sidebar">
        <div className="coding-category-list">
          {categories.map((category) => {
            const count =
              category === "Patterns"
                ? codingTopics.reduce((total, topic) => total + topic.count, 0)
                : categoryTopics[category]?.reduce((total, topicName) => {
                    const topic = codingTopics.find(
                      (item) => item.name === topicName
                    );
                    return total + (topic?.count || 0);
                  }, 0);

            return (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "coding-category active"
                    : "coding-category"
                }
                onClick={() => {
                  setActiveCategory(category);
                  setExpandedTopic(null);
                }}
              >
                <span>{category}</span>
                {activeCategory === category && (
                  <span className="coding-category-count">{count}</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="coding-sidebar-tip">
          <strong>Small steps</strong>
          <b>create big results!</b>
          <span>Keep going 🌱</span>
        </div>
      </aside>

      <section className="coding-main-content">
        <div className="coding-results-heading">
          <div>
            <span className="coding-eyebrow">PRACTICE AND IMPROVE</span>
            <h1>{activeCategory}</h1>
            <p>Master coding patterns one problem at a time.</p>
          </div>
          <div className="coding-progress">
            <strong>{completedProblems.length}</strong>
            <span>Problems completed</span>
          </div>
        </div>

        <div className="coding-search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search topics or problems..."
            aria-label="Search coding topics or problems"
          />
        </div>

        <div className="coding-card-grid">
          {visibleTopics.map((topic) => {
            const isExpanded = expandedTopic === topic.name;
            const completedCount = topic.problems.filter((problem) =>
              completedProblems.includes(problem)
            ).length;

            return (
              <article
                className={`coding-pattern-card ${isExpanded ? "expanded" : ""}`}
                key={topic.name}
              >
                <div className="coding-card-heading">
                  <div className="coding-card-icon">{topic.icon}</div>

                  <div className="coding-card-title">
                    <h2>{topic.name}</h2>
                    <span>
                      {topic.count} {topic.count === 1 ? "Problem" : "Problems"}
                    </span>
                  </div>

                  <button
                    className="coding-expand-button"
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} ${topic.name}`}
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpandedTopic(isExpanded ? null : topic.name)
                    }
                  >
                    {isExpanded ? "−" : "+"}
                  </button>
                </div>

                <p className="coding-card-description">{topic.description}</p>

                {isExpanded && (
                  <div className="coding-problem-list">
                    <div className="coding-problem-list-heading">
                      <strong>Practice Problems</strong>
                      <span>
                        {completedCount}/{topic.problems.length} completed
                      </span>
                    </div>

                    {topic.problems.map((problem, index) => {
                      const isCompleted = completedProblems.includes(problem);

                      return (
                        <label className="coding-problem-row" key={problem}>
                          <input
                            type="checkbox"
                            checked={isCompleted}
                            onChange={() => toggleCompleted(problem)}
                          />
                          <span className="coding-problem-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className={isCompleted ? "completed" : ""}>
                            {problem}
                          </span>
                          <span className="coding-problem-status">
                            {isCompleted ? "Done" : "Practice"}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {visibleTopics.length === 0 && (
          <div className="coding-empty-state">
            <span>🔎</span>
            <h2>No matching topics found</h2>
            <p>Try another search term or choose a different category.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("Patterns");
              }}
            >
              Show all patterns
            </button>
          </div>
        )}

        <div className="coding-bottom-note">
          <span>💜</span>
          <div>
            <strong>Consistency is the key to progress.</strong>
            <p>Keep practising. Every problem brings you one step closer.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CodingPractice;