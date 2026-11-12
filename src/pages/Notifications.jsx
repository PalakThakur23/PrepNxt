import { useMemo, useState } from "react";
import "../styles/Notifications.css";

const initialNotifications = [
  {
    id: 1,
    type: "placement",
    title: "New placement drive announced!",
    message:
      "TCS has opened applications for its Graduate Engineer Trainee role. Check the eligibility criteria and apply before the deadline.",
    time: "10 minutes ago",
    group: "Today",
    unread: true,
    icon: "🏢",
    action: "View Drive",
    link: "/companies",
  },
  {
    id: 2,
    type: "mission",
    title: "Your daily missions are waiting",
    message:
      "You have 3 missions to complete today. Finish them to earn points and maintain your preparation streak.",
    time: "1 hour ago",
    group: "Today",
    unread: true,
    icon: "🎯",
    action: "View Missions",
    link: "/missions",
  },
  {
    id: 3,
    type: "learning",
    title: "Time to revise Data Structures",
    message:
      "A little revision every day makes a big difference. Spend 20 minutes reviewing arrays, stacks and queues.",
    time: "3 hours ago",
    group: "Today",
    unread: true,
    icon: "📚",
    action: "Start Learning",
    link: "/subjects",
  },
  {
    id: 4,
    type: "interview",
    title: "Your mock interview is ready",
    message:
      "Practice your interview skills with a new technical interview session. Get ready to build your confidence!",
    time: "5 hours ago",
    group: "Today",
    unread: false,
    icon: "🎤",
    action: "Practice Now",
    link: "/interview",
  },
  {
    id: 5,
    type: "achievement",
    title: "Great job! You earned 100 points",
    message:
      "You've completed your learning activities and earned 100 PrepNxt points. Keep up the great work!",
    time: "Yesterday",
    group: "Yesterday",
    unread: false,
    icon: "🏆",
    action: "View Dashboard",
    link: "/dashboard",
  },
  {
    id: 6,
    type: "placement",
    title: "Placement application deadline reminder",
    message:
      "Remember to check upcoming application deadlines so you don't miss an opportunity.",
    time: "Yesterday",
    group: "Yesterday",
    unread: false,
    icon: "⏰",
    action: "Explore Drives",
    link: "/companies",
  },
  {
    id: 7,
    type: "learning",
    title: "New learning resources added",
    message:
      "Fresh interview guides, SQL practice questions and aptitude resources are now available in your library.",
    time: "2 days ago",
    group: "Earlier",
    unread: false,
    icon: "📖",
    action: "Explore Resources",
    link: "/resources",
  },
  {
    id: 8,
    type: "achievement",
    title: "Welcome to PrepNxt!",
    message:
      "Your preparation journey starts here. Explore your dashboard and take the first step towards your career goals.",
    time: "3 days ago",
    group: "Earlier",
    unread: false,
    icon: "✨",
    action: "Go to Dashboard",
    link: "/dashboard",
  },
];

const filterOptions = ["All", "Unread", "Read"];

const notificationTypes = [
  "All Types",
  "Placement",
  "Missions",
  "Learning",
  "Interview",
  "Achievements",
];

function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeType, setActiveType] = useState("All Types");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      const matchesReadFilter =
        activeFilter === "All" ||
        (activeFilter === "Unread" && notification.unread) ||
        (activeFilter === "Read" && !notification.unread);

      const matchesType =
        activeType === "All Types" ||
        notification.type ===
          ({
            Placement: "placement",
            Missions: "mission",
            Learning: "learning",
            Interview: "interview",
            Achievements: "achievement",
          }[activeType] || "");

      return matchesReadFilter && matchesType;
    });
  }, [notifications, activeFilter, activeType]);

  const groupedNotifications = ["Today", "Yesterday", "Earlier"]
    .map((group) => ({
      name: group,
      items: filteredNotifications.filter(
        (notification) => notification.group === group
      ),
    }))
    .filter((group) => group.items.length > 0);

  const markAsRead = (id) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const toggleReadStatus = (id) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: !notification.unread }
          : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id)
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({ ...notification, unread: false }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
    setShowDeleteConfirm(false);
  };

  return (
    <main className="notifications-page">
      <header className="notifications-heading">
        <div>
          <span className="notifications-eyebrow">STAY UPDATED</span>
          <h1>Notifications</h1>
          <p>
            Keep track of your placement updates, learning reminders and
            achievements.
          </p>
        </div>

        <div className="notification-bell-art" aria-hidden="true">
          <span>🔔</span>
          {unreadCount > 0 && <i />}
        </div>
      </header>

      <section className="notification-summary">
        <div className="notification-summary-icon">🔔</div>
        <div className="notification-summary-copy">
          <strong>
            {unreadCount === 0
              ? "You're all caught up!"
              : `You have ${unreadCount} unread ${
                  unreadCount === 1 ? "notification" : "notifications"
                }`}
          </strong>
          <span>
            {unreadCount === 0
              ? "There are no unread notifications right now."
              : "Check your latest updates so you don't miss anything important."}
          </span>
        </div>
        <button
          className="mark-all-button"
          onClick={markAllAsRead}
          disabled={unreadCount === 0}
        >
          ✓ Mark all as read
        </button>
      </section>

      <section className="notification-centre">
        <div className="notification-toolbar">
          <div>
            <h2>Recent Activity</h2>
            <p>Your latest PrepNxt updates in one place.</p>
          </div>

          <button
            className="clear-all-button"
            onClick={() => setShowDeleteConfirm(true)}
            disabled={notifications.length === 0}
          >
            <span aria-hidden="true">⌫</span> Clear all
          </button>
        </div>

        <div className="notification-filters">
          <div className="notification-tabs">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                {filter === "Unread" && (
                  <span className="filter-count">{unreadCount}</span>
                )}
              </button>
            ))}
          </div>

          <select
            className="notification-type-select"
            value={activeType}
            onChange={(event) => setActiveType(event.target.value)}
            aria-label="Filter notifications by type"
          >
            {notificationTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {groupedNotifications.length > 0 ? (
          <div className="notification-groups">
            {groupedNotifications.map((group) => (
              <section className="notification-group" key={group.name}>
                <div className="notification-group-heading">
                  <h3>{group.name}</h3>
                  <span>{group.items.length} updates</span>
                </div>

                <div className="notification-list">
                  {group.items.map((notification) => (
                    <article
                      className={`notification-card ${
                        notification.unread ? "is-unread" : ""
                      }`}
                      key={notification.id}
                    >
                      <div
                        className={`notification-type-icon ${notification.type}`}
                        aria-hidden="true"
                      >
                        {notification.icon}
                      </div>

                      <div className="notification-content">
                        <div className="notification-title-row">
                          <h4>{notification.title}</h4>
                          {notification.unread && (
                            <span className="unread-indicator">New</span>
                          )}
                        </div>

                        <p>{notification.message}</p>

                        <div className="notification-card-footer">
                          <span className="notification-time">
                            ◷ {notification.time}
                          </span>

                          <a
                            href={notification.link}
                            className="notification-action-link"
                            onClick={() => markAsRead(notification.id)}
                          >
                            {notification.action} →
                          </a>
                        </div>
                      </div>

                      <div className="notification-card-actions">
                        <button
                          onClick={() => toggleReadStatus(notification.id)}
                          title={
                            notification.unread
                              ? "Mark as read"
                              : "Mark as unread"
                          }
                          aria-label={
                            notification.unread
                              ? "Mark as read"
                              : "Mark as unread"
                          }
                        >
                          {notification.unread ? "✓" : "○"}
                        </button>

                        <button
                          onClick={() => deleteNotification(notification.id)}
                          title="Delete notification"
                          aria-label="Delete notification"
                        >
                          ×
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="notifications-empty">
            <span>🔔</span>
            <h3>
              {notifications.length === 0
                ? "No notifications yet"
                : "No notifications found"}
            </h3>
            <p>
              {notifications.length === 0
                ? "New updates and reminders will appear here."
                : "Try changing the filters to see other notifications."}
            </p>
            {(activeFilter !== "All" || activeType !== "All Types") && (
              <button
                onClick={() => {
                  setActiveFilter("All");
                  setActiveType("All Types");
                }}
              >
                Reset Filters
              </button>
            )}
          </div>
        )}
      </section>

      {showDeleteConfirm && (
        <div
          className="notification-confirm-overlay"
          onClick={() => setShowDeleteConfirm(false)}
        >
          <section
            className="notification-confirm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="clear-notifications-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="confirm-icon">🗑️</div>
            <h2 id="clear-notifications-title">Clear all notifications?</h2>
            <p>
              This will remove all notifications from this page. This action
              cannot be undone.
            </p>
            <div className="confirm-actions">
              <button
                className="confirm-cancel"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button className="confirm-delete" onClick={clearAll}>
                Clear all
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default Notifications;