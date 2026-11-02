const resourceItems = [
  { type: 'Guide', title: 'A practical guide to interview preparation', description: 'A structured approach to planning, practice, and reflection.' },
  { type: 'Cheat sheet', title: 'Data structures quick reference', description: 'Review common operations and their time complexities.' },
  { type: 'Template', title: 'Behavioral answer worksheet', description: 'Organize examples with context, action, and outcome.' },
]

function Resources() {
  return (
    <section className="resources-page" aria-labelledby="resources-title">
      <header>
        <p>Study library</p>
        <h1 id="resources-title">Resources</h1>
        <p>Reference material to support your preparation plan.</p>
      </header>
      <div className="resources-page__list">
        {resourceItems.map((resource) => (
          <article className="resource-card" key={resource.title}>
            <span>{resource.type}</span>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <button type="button">Open resource</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Resources
