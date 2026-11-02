import missions from '../data/missions.js'
import '../styles/Missions.css'

function DailyMissions() {
  const completedCount = missions.filter((mission) => mission.completed).length
  const earnedPoints = missions
    .filter((mission) => mission.completed)
    .reduce((total, mission) => total + mission.points, 0)

  return (
    <section className="missions-page" aria-labelledby="missions-title">
      <header className="missions-page__header">
        <div>
          <p className="missions-page__eyebrow">Daily missions</p>
          <h1 id="missions-title" className="missions-page__title">Small steps, steady progress</h1>
          <p className="missions-page__description">
            Complete a few focused tasks to keep your preparation moving forward.
          </p>
        </div>
        <div className="missions-page__summary" aria-live="polite">
          <strong>{completedCount}/{missions.length}</strong>
          <span>missions complete</span>
          <strong>{earnedPoints} pts</strong>
          <span>earned today</span>
        </div>
      </header>

      <div className="missions-page__list">
        {missions.map((mission) => (
          <article className="mission-card" key={mission.id}>
            <div className="mission-card__content">
              <span className="mission-card__category">{mission.category}</span>
              <h2 className="mission-card__title">{mission.title}</h2>
              <p>{mission.description}</p>
              <div className="mission-card__meta">
                <span>{mission.duration}</span>
                <span>{mission.points} points</span>
              </div>
            </div>
            <span className={`mission-card__status${mission.completed ? ' mission-card__status--complete' : ''}`}>
              {mission.completed ? 'Completed' : 'To do'}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default DailyMissions
