const interviewTypes = [
  {
    title: 'Behavioral interview',
    description: 'Practice structured answers about teamwork, challenges, and impact.',
    duration: '20 minutes',
    level: 'All levels',
  },
  {
    title: 'Technical interview',
    description: 'Work through a coding prompt and explain your approach aloud.',
    duration: '45 minutes',
    level: 'Intermediate',
  },
  {
    title: 'System design',
    description: 'Practice clarifying requirements and designing a scalable service.',
    duration: '40 minutes',
    level: 'Advanced',
  },
]

function MockInterview() {
  return (
    <section className="mock-interview" aria-labelledby="mock-interview-title">
      <header>
        <p>Interview preparation</p>
        <h1 id="mock-interview-title">Mock interviews</h1>
        <p>Choose a format and practice in a low-pressure setting.</p>
      </header>
      <div className="mock-interview__grid">
        {interviewTypes.map((interview) => (
          <article className="mock-interview__card" key={interview.title}>
            <span>{interview.level}</span>
            <h2>{interview.title}</h2>
            <p>{interview.description}</p>
            <div className="mock-interview__footer">
              <span>{interview.duration}</span>
              <button type="button">Start practice</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MockInterview
