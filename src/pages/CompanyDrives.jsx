import { useMemo, useState } from "react";
import "../styles/CompanyDrives.css";

const companies = [
  {
    id: 1,
    name: "TCS",
    fullName: "Tata Consultancy Services",
    role: "Software Engineer",
    type: "Placement Drive",
    mode: "On-Campus",
    location: "India",
    deadline: "25 Nov 2026",
    package: "CTC 6.5 LPA+",
    eligibility: "B.E. / B.Tech (All Branches)",
    cgpa: "7.0 and above",
    skills: ["DSA", "Java", "SQL"],
    description:
      "Explore software development opportunities with TCS. Prepare for aptitude, technical and interview rounds.",
  },
  {
    id: 2,
    name: "Infosys",
    fullName: "Infosys Limited",
    role: "Software Engineer",
    type: "Placement Drive",
    mode: "On-Campus",
    location: "Bengaluru",
    deadline: "30 Nov 2026",
    package: "CTC 6.5 LPA+",
    eligibility: "B.E. / B.Tech (CSE, ECE)",
    cgpa: "7.0 and above",
    skills: ["Java", "Python", "SQL"],
    description:
      "Apply for software engineering roles and prepare for programming, problem-solving and technical interviews.",
  },
  {
    id: 3,
    name: "Google",
    fullName: "Google",
    role: "Software Engineering Intern",
    type: "Internship Drive",
    mode: "Off-Campus",
    location: "Bengaluru",
    deadline: "05 Dec 2026",
    package: "Competitive stipend",
    eligibility: "B.E. / B.Tech (All Branches)",
    cgpa: "6.0 and above",
    skills: ["DSA", "Python", "System Design"],
    description:
      "Explore internship opportunities and gain experience working on real-world engineering problems.",
  },
  {
    id: 4,
    name: "Microsoft",
    fullName: "Microsoft Corporation",
    role: "Software Engineer",
    type: "Placement Drive",
    mode: "Off-Campus",
    location: "Hyderabad",
    deadline: "12 Dec 2026",
    package: "CTC 12 LPA+",
    eligibility: "B.E. / B.Tech (CSE, IT)",
    cgpa: "7.5 and above",
    skills: ["DSA", "C++", "System Design"],
    description:
      "Explore engineering roles focused on software development, problem-solving and scalable applications.",
  },
  {
    id: 5,
    name: "Amazon",
    fullName: "Amazon",
    role: "SDE Intern",
    type: "Internship Drive",
    mode: "Off-Campus",
    location: "Bengaluru",
    deadline: "18 Dec 2026",
    package: "Competitive stipend",
    eligibility: "B.E. / B.Tech (All Branches)",
    cgpa: "7.0 and above",
    skills: ["DSA", "Java", "System Design"],
    description:
      "Prepare for an internship opportunity involving coding, data structures and software engineering.",
  },
];

const preparationSteps = [
  { name: "DSA", progress: 40 },
  { name: "Aptitude", progress: 30 },
  { name: "System Design", progress: 15 },
  { name: "Projects", progress: 15 },
];

function CompanyDrives() {
  const [activeTab, setActiveTab] = useState("All Companies");
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [filters, setFilters] = useState({
    "On-Campus": true,
    "Off-Campus": true,
    Internship: true,
  });
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [savedCompanies, setSavedCompanies] = useState([]);
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesTab =
        activeTab === "All Companies" ||
        (activeTab === "Placement Drives" &&
          company.type === "Placement Drive") ||
        (activeTab === "Internship Drives" &&
          company.type === "Internship Drive");

      const searchText = search.toLowerCase();

      const matchesSearch =
        company.name.toLowerCase().includes(searchText) ||
        company.fullName.toLowerCase().includes(searchText) ||
        company.role.toLowerCase().includes(searchText);

      const matchesRole =
        selectedRole === "All Roles" || company.role === selectedRole;

      const matchesLocation =
        selectedLocation === "All Locations" ||
        company.location === selectedLocation;

      const matchesMode = filters[company.mode];

      const matchesInternship =
        filters.Internship || company.type !== "Internship Drive";

      return (
        matchesTab &&
        matchesSearch &&
        matchesRole &&
        matchesLocation &&
        matchesMode &&
        matchesInternship
      );
    });
  }, [
    activeTab,
    search,
    selectedRole,
    selectedLocation,
    filters,
  ]);

  const toggleFilter = (filterName) => {
    setFilters((previous) => ({
      ...previous,
      [filterName]: !previous[filterName],
    }));
  };

  const toggleSaved = (companyId) => {
    setSavedCompanies((previous) =>
      previous.includes(companyId)
        ? previous.filter((id) => id !== companyId)
        : [...previous, companyId]
    );
  };

  return (
    <main className="company-page">
      <header className="company-heading">
        <h1>Company &amp; Placement Drives</h1>
        <p>Explore top companies and track your applications.</p>
      </header>

      <div className="company-layout">
        <section className="company-main">
          <div className="company-tabs">
            {["All Companies", "Placement Drives", "Internship Drives"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`company-tab ${
                    activeTab === tab ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          <div className="company-search-row">
            <div className="company-search">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search companies..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <select
              value={selectedRole}
              onChange={(event) => setSelectedRole(event.target.value)}
              aria-label="Filter by role"
            >
              <option>All Roles</option>
              <option>Software Engineer</option>
              <option>Software Engineering Intern</option>
              <option>SDE Intern</option>
            </select>

            <select
              value={selectedLocation}
              onChange={(event) => setSelectedLocation(event.target.value)}
              aria-label="Filter by location"
            >
              <option>All Locations</option>
              <option>India</option>
              <option>Bengaluru</option>
              <option>Hyderabad</option>
            </select>
          </div>

          <div className="company-results">
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company) => (
                <article className="company-card" key={company.id}>
                  <div className="company-card-left">
                    <div className={`company-logo logo-${company.name.toLowerCase()}`}>
                      {company.name === "Google" ? (
                        <span className="google-logo">Google</span>
                      ) : (
                        company.name
                      )}
                    </div>

                    <div className="company-info">
                      <h2>{company.name}</h2>
                      <p className="company-full-name">{company.fullName}</p>

                      <div className="company-tags">
                        <span
                          className={`company-tag ${
                            company.mode === "On-Campus"
                              ? "on-campus"
                              : "off-campus"
                          }`}
                        >
                          {company.mode}
                        </span>

                        <span
                          className={`company-tag ${
                            company.type === "Internship Drive"
                              ? "internship-tag"
                              : "placement-tag"
                          }`}
                        >
                          {company.type}
                        </span>
                      </div>

                      <p className="company-deadline">
                        Apply by {company.deadline} · {company.package}
                      </p>
                    </div>
                  </div>

                  <div className="company-eligibility">
                    <h3>Eligibility</h3>
                    <p>{company.eligibility}</p>
                    <p>CGPA: {company.cgpa}</p>

                    <button
                      className="view-details-btn"
                      onClick={() => setSelectedCompany(company)}
                    >
                      View Details
                    </button>
                  </div>

                  <button
                    className={`save-company ${
                      savedCompanies.includes(company.id) ? "saved" : ""
                    }`}
                    onClick={() => toggleSaved(company.id)}
                    aria-label={
                      savedCompanies.includes(company.id)
                        ? "Remove saved company"
                        : "Save company"
                    }
                    title="Save company"
                  >
                    {savedCompanies.includes(company.id) ? "♥" : "♡"}
                  </button>
                </article>
              ))
            ) : (
              <div className="company-empty">
                <span>⌕</span>
                <h3>No companies found</h3>
                <p>Try changing your search or filters.</p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedRole("All Roles");
                    setSelectedLocation("All Locations");
                    setActiveTab("All Companies");
                    setFilters({
                      "On-Campus": true,
                      "Off-Campus": true,
                      Internship: true,
                    });
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          <section className="preparation-path">
            <h2>Your Preparation Path for TCS</h2>

            <div className="preparation-steps">
              {preparationSteps.map((step, index) => (
                <div className="preparation-step" key={step.name}>
                  <div className="step-circle">{index + 1}</div>
                  <div className="step-info">
                    <h3>{step.name}</h3>
                    <p>{step.progress}%</p>
                  </div>
                  {index !== preparationSteps.length - 1 && (
                    <div className="step-line" />
                  )}
                </div>
              ))}
            </div>
          </section>
        </section>

        <aside className="company-sidebar">
          <section className="company-side-card quick-filters">
            <h2>Quick Filters</h2>

            {["On-Campus", "Off-Campus", "Internship"].map((filter) => (
              <label className="quick-filter-option" key={filter}>
                <input
                  type="checkbox"
                  checked={filters[filter]}
                  onChange={() => toggleFilter(filter)}
                />
                <span className="custom-checkbox">✓</span>
                {filter}
              </label>
            ))}
          </section>

          <section className="company-side-card top-skills">
            <h2>Top Skills</h2>
            <div className="skill-tags">
              {["DSA", "SQL", "Java", "Python", "System Design"].map(
                (skill) => (
                  <span key={skill}>{skill}</span>
                )
              )}
            </div>
          </section>

          <section className="notification-promo">
            <div className="promo-bell">♧</div>
            <h2>Stay in the Loop</h2>
            <p>
              Get instant alerts for new placement drives and deadlines.
            </p>
            <button
              onClick={() => setNotificationEnabled((previous) => !previous)}
            >
              {notificationEnabled
                ? "Notifications Enabled ✓"
                : "Enable Notifications"}
            </button>
            {notificationEnabled && (
              <small>
                Reminder preference saved for this session.
              </small>
            )}
          </section>
        </aside>
      </div>

      {selectedCompany && (
        <div
          className="company-modal-backdrop"
          onClick={() => setSelectedCompany(null)}
        >
          <section
            className="company-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="company-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="company-modal-close"
              onClick={() => setSelectedCompany(null)}
              aria-label="Close details"
            >
              ×
            </button>

            <span className="modal-eyebrow">
              {selectedCompany.type}
            </span>
            <h2 id="company-modal-title">{selectedCompany.name}</h2>
            <p className="modal-company-name">
              {selectedCompany.fullName}
            </p>

            <div className="modal-detail-grid">
              <div>
                <span>Role</span>
                <strong>{selectedCompany.role}</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>{selectedCompany.location}</strong>
              </div>
              <div>
                <span>Mode</span>
                <strong>{selectedCompany.mode}</strong>
              </div>
              <div>
                <span>Application deadline</span>
                <strong>{selectedCompany.deadline}</strong>
              </div>
              <div>
                <span>Package / Stipend</span>
                <strong>{selectedCompany.package}</strong>
              </div>
              <div>
                <span>Eligibility</span>
                <strong>{selectedCompany.eligibility}</strong>
              </div>
            </div>

            <h3>About this opportunity</h3>
            <p className="modal-description">
              {selectedCompany.description}
            </p>

            <h3>Relevant skills</h3>
            <div className="skill-tags modal-skills">
              {selectedCompany.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <button
              className="view-details-btn modal-done"
              onClick={() => setSelectedCompany(null)}
            >
              Done
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default CompanyDrives;