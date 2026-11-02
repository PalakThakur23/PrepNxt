function Settings() {
  return (
    <section className="settings-page" aria-labelledby="settings-title">
      <header>
        <p>Your account</p>
        <h1 id="settings-title">Settings</h1>
        <p>Manage your profile and study preferences.</p>
      </header>

      <form className="settings-page__form">
        <fieldset>
          <legend>Profile</legend>
          <label>
            Display name
            <input type="text" name="displayName" defaultValue="Learner" />
          </label>
          <label>
            Email address
            <input type="email" name="email" defaultValue="learner@example.com" />
          </label>
        </fieldset>

        <fieldset>
          <legend>Study preferences</legend>
          <label>
            Daily study goal
            <select name="studyGoal" defaultValue="2">
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
            </select>
          </label>
          <label className="settings-page__toggle">
            <input type="checkbox" name="reminders" defaultChecked />
            <span>Send me study reminders</span>
          </label>
        </fieldset>

        <button type="submit">Save changes</button>
      </form>
    </section>
  )
}

export default Settings
