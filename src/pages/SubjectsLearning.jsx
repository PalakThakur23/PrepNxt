import subjects from '../data/subjects.js'
import '../styles/Subjects.css'

function SubjectsLearning() {
  return (
    <section className="subjects-page" aria-labelledby="subjects-title">
      <header className="subjects-page__header">
        <p className="subjects-page__eyebrow">Learning plan</p>
        <h1 id="subjects-title">Your subjects</h1>
        <p>Pick up where you left off and keep each topic moving forward.</p>
      </header>

      <div className="subjects-grid">
        {subjects.map((subject) => (
          <article className={`subject-card subject-card--${subject.color}`} key={subject.id}>
            <div className="subject-card__top">
              <span className="subject-card__tag">Learning path</span>
              <strong>{subject.progress}%</strong>
            </div>
            <h2>{subject.name}</h2>
            <p>{subject.description}</p>
            <div
              className="subject-card__progress"
              role="progressbar"
              aria-label={`${subject.name} progress`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={subject.progress}
            >
              <span style={{ width: `${subject.progress}%` }} />
            </div>
            <div className="subject-card__footer">
              <span>{subject.completedTopics} of {subject.totalTopics} topics</span>
              <button type="button" className="subject-card__button">Continue</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SubjectsLearning
