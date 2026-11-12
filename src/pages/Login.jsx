
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Temporary frontend login.
    // Replace with backend authentication later.
    const savedUser = JSON.parse(
      localStorage.getItem("prepnxtUser") || "null"
    );

    if (!savedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (
      savedUser.email !== formData.email ||
      savedUser.password !== formData.password
    ) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <Link to="/" className="auth-logo">
          Prep<span>Nxt</span>
        </Link>

        <div className="auth-heading">
          <h1>Welcome Back!</h1>
          <p>Login to continue your placement preparation journey.</p>
        </div>

        {location.state?.message && (
          <p className="auth-success">
            {location.state.message}
          </p>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>

          <div className="auth-input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-input-group">
            <label htmlFor="password">Password</label>

            <div className="auth-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
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

          <div className="auth-forgot">
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          {error && (
            <p className="auth-error">{error}</p>
          )}

          <button type="submit" className="auth-submit-btn">
            Login
          </button>

        </form>

        <div className="auth-divider">OR</div>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>

        <Link to="/" className="auth-back-home">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Login;
