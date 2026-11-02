const notifications = [
  { id: 'mission-reminder', title: 'Your daily missions are ready', detail: 'Three focused tasks are waiting in your plan.', time: 'Today', unread: true },
  { id: 'drive-deadline', title: 'Application deadline coming up', detail: 'Northstar Technologies applications close soon.', time: 'Yesterday', unread: true },
  { id: 'weekly-progress', title: 'Your weekly progress is available', detail: 'Review your completed topics and study streak.', time: '2 days ago', unread: false },
]

function Notifications() {
  return (
    <section className="notifications-page" aria-labelledby="notifications-title">
      <header className="notifications-page__header">
        <div>
          <p>Updates</p>
          <h1 id="notifications-title">Notifications</h1>
        </div>
        <button type="button">Mark all as read</button>
      </header>
      <div className="notifications-page__list">
        {notifications.map((notification) => (
          <article
            className={`notification-card${notification.unread ? ' notification-card--unread' : ''}`}
            key={notification.id}
          >
            <span className="notification-card__indicator" aria-label={notification.unread ? 'Unread' : 'Read'} />
            <div>
              <h2>{notification.title}</h2>
              <p>{notification.detail}</p>
            </div>
            <time>{notification.time}</time>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Notifications
