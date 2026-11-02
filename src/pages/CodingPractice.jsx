import codingPatterns from '../data/codingPatterns.js'
import '../styles/CodingPractice.css'

function CodingPractice() {
  return (
    <section className="coding-page" aria-labelledby="coding-title">
      <header className="coding-page__header">
        <div>
          <p className="coding-page__eyebrow">Practice workspace</p>
          <h1 id="coding-title">Coding practice</h1>
          <p>Build pattern recognition with focused problem sets.</p>
        </div>
        <div className="coding-page__streak">
          <strong>4 days</strong>
          <span>current streak</span>
        </div>
      </header>

      <div className="coding-page__filters" aria-label="Practice filters">
        <button type="button" className="coding-page__filter coding-page__filter--active">All patterns</button>
        <button type="button" className="coding-page__filter">Beginner</button>
        <button type="button" className="coding-page__filter">Intermediate</button>
        <button type="button" className="coding-page__filter">Advanced</button>
      </div>

      <div className="coding-patterns">
        {codingPatterns.map((pattern) => (
          <article className="coding-pattern" key={pattern.id}>
            <div className="coding-pattern__header">
              <span className="coding-pattern__level">{pattern.level}</span>
              <span>{pattern.problems} problems</span>
            </div>
            <h2>{pattern.name}</h2>
            <p>{pattern.description}</p>
            <button type="button" className="coding-pattern__button">Practice pattern</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CodingPractice
