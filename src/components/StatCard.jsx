function StatCard({ label, value, change, icon }) {
  return (
    <article className="stat-card">
      <div className="stat-card__top">
        <span className="stat-card__label">{label}</span>
        {icon && <span className="stat-card__icon" aria-hidden="true">{icon}</span>}
      </div>
      <strong className="stat-card__value">{value}</strong>
      {change && <span className="stat-card__change">{change}</span>}
    </article>
  )
}

export default StatCard
