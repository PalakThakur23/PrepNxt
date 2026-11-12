import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  if (formData.password.length < 6) {
    setError("Password must contain at least 6 characters.");
    return;
  }

  // Temporary frontend-only registration
  const user = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  };

  localStorage.setItem("prepnxtUser", JSON.stringify(user));

  navigate("/login", {
    state: {
      message: "Account created successfully! Please login.",
    },
  });
};

  return (
    <div className="auth-page">
      <div className="auth-card signup-card">

        <Link to="/" className="auth-logo">
          Prep<span>Nxt</span>
        </Link>

        <div className="auth-heading">
          <h1>Create Account</h1>
          <p>Start your placement preparation journey today!</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">

          <div className="auth-input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-input-group">
            <label>Password</label>

            <div className="auth-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                minLength={8}
                required
              />

              <button
                type="button"
                className="auth-toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="auth-input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength={8}
              required
            />
          </div>

          {error && (
            <p className="auth-error">{error}</p>
          )}

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <p className="auth-switch">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

        <Link to="/" className="auth-back-home">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Signup;