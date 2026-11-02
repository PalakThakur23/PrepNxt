import companies from '../data/companies.js'

function CompanyDrives() {
  return (
    <section className="company-drives" aria-labelledby="company-drives-title">
      <header className="company-drives__header">
        <div>
          <p>Opportunities</p>
          <h1 id="company-drives-title">Company drives</h1>
          <p>Explore roles and keep track of upcoming application deadlines.</p>
        </div>
        <span>{companies.length} open opportunities</span>
      </header>

      <div className="company-drives__list">
        {companies.map((company) => (
          <article className="company-drive-card" key={company.id}>
            <div className="company-drive-card__main">
              <span className="company-drive-card__type">{company.type}</span>
              <h2>{company.role}</h2>
              <p>{company.name} · {company.location}</p>
              <ul className="company-drive-card__skills">
                {company.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div className="company-drive-card__deadline">
              <span>Apply by</span>
              <time dateTime={company.deadline}>
                {new Date(`${company.deadline}T00:00:00`).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <button type="button">View opportunity</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CompanyDrives
