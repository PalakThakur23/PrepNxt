import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Navbar */}
      <nav className="navbar">

        <Link to="/" className="logo">
          <span>🎓</span> PrepNxt
        </Link>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <span className="hero-label">
            Your Placement Journey, Simplified
          </span>

          <h1>
            Prepare Smarter.
            <br />
            Get Placed Faster.
          </h1>

          <p>
            PrepNxt is your all-in-one platform to ace
            interviews, sharpen your skills, and own your
            placement journey — every step of the way.
          </p>

          <div className="hero-buttons">
            <Link to="/signup" className="primary-btn">
              Get Started
            </Link>

            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://placehold.co/600x400/eee7f8/54249b?text=PrepNxt+Illustration"
            alt="PrepNxt student illustration"
          />
        </div>

      </section>

      {/* Features Section */}
      <section className="features" id="features">

        {[
          {
            title: "Coding Practice",
            description: "Solve problems, strengthen your DSA skills, and grow as a programmer."
          },
          {
            title: "Aptitude",
            description: "Sharpen your logic with topic-wise quizzes and full-length mock tests."
          },
          {
            title: "Mock Interviews",
            description: "Simulate real interview scenarios and receive actionable feedback."
          },
          {
            title: "AI Interview",
            description: "Talk to an AI interviewer and get instant feedback."
          },
          {
            title: "Resume Builder",
            description: "Build a polished professional resume."
          }
        ].map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}

      </section>

      {/* About Section */}
      <section className="about" id="about">

        <div>
          <span className="hero-label">Why PrepNxt?</span>

          <h2>
            Everything you need for
            a successful placement
          </h2>

          <p>
            From sharpening your coding skills to acing your
            interviews, PrepNxt gives you everything you need
            — the right tools, curated resources, and guidance
            to land your dream job.
          </p>

          <div className="stats">
            <div>
              <h2>10k+</h2>
              <p>Active Students</p>
            </div>

            <div>
              <h2>500+</h2>
              <p>Partner Companies</p>
            </div>

            <div>
              <h2>95%</h2>
              <p>Success Rate</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img
            src="https://placehold.co/500x350/eee7f8/54249b?text=Dashboard+Preview"
            alt="Dashboard preview"
          />
        </div>

      </section>

    </div>
  );
}

export default Home;