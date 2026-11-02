function ProgressBar({ value = 0, label = 'Progress', showValue = true }) {
  const percentage = Math.min(100, Math.max(0, Number(value) || 0))

  return (
    <div className="progress">
      <div className="progress__header">
        <span className="progress__label">{label}</span>
        {showValue && <span className="progress__value">{percentage}%</span>}
      </div>
      <div
        className="progress__track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
      >
        <div className="progress__fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
