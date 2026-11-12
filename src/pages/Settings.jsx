import { useState } from "react";
import "../styles/Settings.css";

const initialSettings = {
  fullName: "Gursheen Kaur",
  email: "gursheen@example.com",
  phone: "",
  college: "",
  course: "B.Tech",
  graduationYear: "2027",
  bio: "Preparing for my dream career with PrepNxt.",
  emailNotifications: true,
  placementAlerts: true,
  missionReminders: true,
  learningUpdates: false,
  interviewReminders: true,
  weeklyReport: true,
  darkMode: false,
  profileVisibility: true,
};

function Settings() {
  const [settings, setSettings] = useState(initialSettings);
  const [activeTab, setActiveTab] = useState("Profile");
  const [savedMessage, setSavedMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const updateSetting = (key, value) => {
    setSettings((current) => ({ ...current, [key]: value }));
    setSavedMessage("");
  };

  const updatePassword = (key, value) => {
    setPasswords((current) => ({ ...current, [key]: value }));
    setSavedMessage("");
  };

  const saveSettings = () => {
    if (passwords.new || passwords.confirm || passwords.current) {
      if (!passwords.current || !passwords.new || !passwords.confirm) {
        setSavedMessage("Please fill in all password fields.");
        return;
      }

      if (passwords.new !== passwords.confirm) {
        setSavedMessage("New password and confirmation do not match.");
        return;
      }

      if (passwords.new.length < 8) {
        setSavedMessage("Your new password must have at least 8 characters.");
        return;
      }
    }

    setSavedMessage("Your settings have been saved successfully!");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const resetSettings = () => {
    setSettings(initialSettings);
    setPasswords({ current: "", new: "", confirm: "" });
    setSavedMessage("Settings have been reset to their sample defaults.");
  };

  const tabs = [
    { name: "Profile", icon: "👤" },
    { name: "Account", icon: "🔐" },
    { name: "Notifications", icon: "🔔" },
    { name: "Appearance", icon: "🎨" },
    { name: "Privacy", icon: "🛡️" },
  ];

  const Toggle = ({ label, description, settingKey }) => (
    <label className="settings-toggle-row">
      <span className="settings-toggle-copy">
        <strong>{label}</strong>
        <small>{description}</small>
      </span>

      <input
        type="checkbox"
        checked={settings[settingKey]}
        onChange={(event) =>
          updateSetting(settingKey, event.target.checked)
        }
      />

      <span className="settings-switch" aria-hidden="true" />
    </label>
  );

  return (
    <main className="settings-page">
      <header className="settings-heading">
        <div>
          <span className="settings-eyebrow">PERSONALISE YOUR EXPERIENCE</span>
          <h1>Settings</h1>
          <p>Manage your profile, preferences and account security.</p>
        </div>

        <div className="settings-heading-icon" aria-hidden="true">
          ⚙️
        </div>
      </header>

      <div className="settings-layout">
        <aside className="settings-sidebar">
          <div className="settings-profile-mini">
            <div className="settings-avatar">G</div>
            <div>
              <strong>{settings.fullName || "Your Name"}</strong>
              <span>PrepNxt Student</span>
            </div>
          </div>

          <div className="settings-tab-list">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={
                  activeTab === tab.name ? "settings-tab active" : "settings-tab"
                }
                onClick={() => {
                  setActiveTab(tab.name);
                  setSavedMessage("");
                }}
              >
                <span>{tab.icon}</span>
                {tab.name}
                <span className="settings-tab-arrow">›</span>
              </button>
            ))}
          </div>

          <div className="settings-help-card">
            <span>💡</span>
            <strong>Need help?</strong>
            <p>Manage your preferences to make PrepNxt work better for you.</p>
          </div>
        </aside>

        <section className="settings-content">
          {activeTab === "Profile" && (
            <div className="settings-section">
              <div className="settings-section-heading">
                <div>
                  <h2>Profile Information</h2>
                  <p>Update your personal and academic information.</p>
                </div>
                <span className="settings-section-icon">👤</span>
              </div>

              <div className="settings-avatar-editor">
                <div className="settings-avatar large">
                  {settings.fullName.trim().charAt(0).toUpperCase() || "G"}
                </div>
                <div>
                  <strong>Your Profile</strong>
                  <p>Your profile details help personalise your experience.</p>
                </div>
              </div>

              <div className="settings-form-grid">
                <label className="settings-field">
                  Full Name
                  <input
                    type="text"
                    value={settings.fullName}
                    onChange={(event) =>
                      updateSetting("fullName", event.target.value)
                    }
                    placeholder="Enter your full name"
                  />
                </label>

                <label className="settings-field">
                  Email Address
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(event) =>
                      updateSetting("email", event.target.value)
                    }
                    placeholder="Enter your email"
                  />
                </label>

                <label className="settings-field">
                  Phone Number
                  <input
                    type="tel"
                    value={settings.phone}
                    onChange={(event) =>
                      updateSetting("phone", event.target.value)
                    }
                    placeholder="Enter your phone number"
                  />
                </label>

                <label className="settings-field">
                  College / University
                  <input
                    type="text"
                    value={settings.college}
                    onChange={(event) =>
                      updateSetting("college", event.target.value)
                    }
                    placeholder="Enter your college name"
                  />
                </label>

                <label className="settings-field">
                  Course
                  <select
                    value={settings.course}
                    onChange={(event) =>
                      updateSetting("course", event.target.value)
                    }
                  >
                    <option>B.Tech</option>
                    <option>B.E.</option>
                    <option>BCA</option>
                    <option>MCA</option>
                    <option>M.Tech</option>
                    <option>B.Sc</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="settings-field">
                  Graduation Year
                  <select
                    value={settings.graduationYear}
                    onChange={(event) =>
                      updateSetting("graduationYear", event.target.value)
                    }
                  >
                    {["2026", "2027", "2028", "2029", "2030"].map((year) => (
                      <option key={year}>{year}</option>
                    ))}
                  </select>
                </label>

                <label className="settings-field full-width">
                  About Me
                  <textarea
                    rows="3"
                    value={settings.bio}
                    onChange={(event) =>
                      updateSetting("bio", event.target.value)
                    }
                    placeholder="Write a short introduction..."
                  />
                </label>
              </div>
            </div>
          )}

          {activeTab === "Account" && (
            <div className="settings-section">
              <div className="settings-section-heading">
                <div>
                  <h2>Account & Security</h2>
                  <p>Manage your login details and password.</p>
                </div>
                <span className="settings-section-icon">🔐</span>
              </div>

              <div className="settings-info-card">
                <span>📧</span>
                <div>
                  <strong>Registered email</strong>
                  <p>{settings.email || "No email added"}</p>
                </div>
              </div>

              <h3 className="settings-subheading">Change Password</h3>
              <p className="settings-muted">
                Choose a strong password with at least 8 characters.
              </p>

              <div className="settings-password-fields">
                <label className="settings-field">
                  Current Password
                  <input
                    type={showPassword ? "text" : "password"}
                    value={passwords.current}
                    onChange={(event) =>
                      updatePassword("current", event.target.value)
                    }
                    placeholder="Enter current password"
                  />
                </label>

                <label className="settings-field">
                  New Password
                  <input
                    type={showPassword ? "text" : "password"}
                    value={passwords.new}
                    onChange={(event) =>
                      updatePassword("new", event.target.value)
                    }
                    placeholder="Enter new password"
                  />
                </label>

                <label className="settings-field">
                  Confirm New Password
                  <input
                    type={showPassword ? "text" : "password"}
                    value={passwords.confirm}
                    onChange={(event) =>
                      updatePassword("confirm", event.target.value)
                    }
                    placeholder="Confirm new password"
                  />
                </label>

                <label className="settings-show-password">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={(event) => setShowPassword(event.target.checked)}
                  />
                  Show password
                </label>
              </div>

              <div className="settings-info-card security-note">
                <span>🛡️</span>
                <div>
                  <strong>Keep your account secure</strong>
                  <p>
                    Never share your password or login credentials with anyone.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Notifications" && (
            <div className="settings-section">
              <div className="settings-section-heading">
                <div>
                  <h2>Notification Preferences</h2>
                  <p>Choose which updates you want to receive.</p>
                </div>
                <span className="settings-section-icon">🔔</span>
              </div>

              <div className="settings-toggle-list">
                <Toggle
                  label="Email Notifications"
                  description="Receive important updates through email."
                  settingKey="emailNotifications"
                />
                <Toggle
                  label="Placement Alerts"
                  description="Get notified about new company drives and deadlines."
                  settingKey="placementAlerts"
                />
                <Toggle
                  label="Daily Mission Reminders"
                  description="Receive reminders about your daily preparation goals."
                  settingKey="missionReminders"
                />
                <Toggle
                  label="Learning Updates"
                  description="Know when new learning resources become available."
                  settingKey="learningUpdates"
                />
                <Toggle
                  label="Interview Reminders"
                  description="Get reminders for your mock interview practice."
                  settingKey="interviewReminders"
                />
                <Toggle
                  label="Weekly Progress Report"
                  description="Receive a summary of your weekly preparation."
                  settingKey="weeklyReport"
                />
              </div>
            </div>
          )}

          {activeTab === "Appearance" && (
            <div className="settings-section">
              <div className="settings-section-heading">
                <div>
                  <h2>Appearance</h2>
                  <p>Personalise how PrepNxt looks on your device.</p>
                </div>
                <span className="settings-section-icon">🎨</span>
              </div>

              <h3 className="settings-subheading">Theme Preference</h3>
              <p className="settings-muted">
                Choose the theme that feels comfortable for you.
              </p>

              <div className="settings-theme-options">
                <button
                  className={!settings.darkMode ? "theme-option selected" : "theme-option"}
                  onClick={() => updateSetting("darkMode", false)}
                >
                  <div className="theme-preview light-preview">
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong>Light Mode</strong>
                  <small>Clean and bright</small>
                  { !settings.darkMode && <span className="theme-check">✓</span> }
                </button>

                <button
                  className={settings.darkMode ? "theme-option selected" : "theme-option"}
                  onClick={() => updateSetting("darkMode", true)}
                >
                  <div className="theme-preview dark-preview">
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong>Dark Mode</strong>
                  <small>Comfortable in low light</small>
                  { settings.darkMode && <span className="theme-check">✓</span> }
                </button>
              </div>

              <div className="settings-info-card">
                <span>💜</span>
                <div>
                  <strong>PrepNxt theme colour</strong>
                  <p>Your dashboard uses the signature purple and lavender palette.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Privacy" && (
            <div className="settings-section">
              <div className="settings-section-heading">
                <div>
                  <h2>Privacy & Visibility</h2>
                  <p>Control how your profile and activity are displayed.</p>
                </div>
                <span className="settings-section-icon">🛡️</span>
              </div>

              <div className="settings-toggle-list">
                <Toggle
                  label="Profile Visibility"
                  description="Allow your profile to be visible to other users."
                  settingKey="profileVisibility"
                />
              </div>

              <div className="settings-info-card privacy-note">
                <span>🔒</span>
                <div>
                  <strong>Your information matters</strong>
                  <p>
                    Keep your account details private. Only share personal
                    information with trusted services.
                  </p>
                </div>
              </div>

              <div className="settings-danger-zone">
                <h3>Account Actions</h3>
                <p>
                  Need to leave PrepNxt? Contact the platform administrator
                  for account deletion assistance.
                </p>
                <button
                  onClick={() =>
                    setSavedMessage(
                      "Account deletion is not available in this frontend demo."
                    )
                  }
                >
                  Request Account Deletion
                </button>
              </div>
            </div>
          )}

          <div className="settings-footer">
            <div className="settings-feedback" aria-live="polite">
              {savedMessage && (
                <span
                  className={
                    savedMessage.includes("successfully")
                      ? "feedback-success"
                      : "feedback-error"
                  }
                >
                  {savedMessage}
                </span>
              )}
            </div>

            <div className="settings-footer-buttons">
              <button className="settings-reset-button" onClick={resetSettings}>
                Reset
              </button>
              <button className="settings-save-button" onClick={saveSettings}>
                Save Changes
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Settings;