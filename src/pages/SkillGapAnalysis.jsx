const skillGaps = [
  { skill: 'Data structures', level: 'Strong', progress: 82 },
  { skill: 'Problem solving', level: 'Developing', progress: 58 },
  { skill: 'System design', level: 'Needs focus', progress: 34 },
  { skill: 'Communication', level: 'Developing', progress: 65 },
]

function SkillGapAnalysis() {
  return (
    <section className="skill-gap-page" aria-labelledby="skill-gap-title">
      <header className="skill-gap-page__header">
        <p>Personalized insights</p>
        <h1 id="skill-gap-title">Skill gap analysis</h1>
        <p>Use your recent practice to decide what to focus on next.</p>
      </header>

      <div className="skill-gap-page__recommendation">
        <strong>Recommended focus: System design</strong>
        <p>Set aside two short sessions this week to review architecture fundamentals.</p>
      </div>

      <div className="skill-gap-page__list">
        {skillGaps.map((item) => (
          <article className="skill-gap-item" key={item.skill}>
            <div className="skill-gap-item__header">
              <h2>{item.skill}</h2>
              <span>{item.level}</span>
            </div>
            <div
              className="skill-gap-item__track"
              role="progressbar"
              aria-label={`${item.skill} proficiency`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={item.progress}
            >
              <span style={{ width: `${item.progress}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillGapAnalysis
