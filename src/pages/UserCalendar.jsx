import React, { useState } from 'react';

const UserCalendar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  const activities = [
    'Activity 1',
    'Activity 2',
    'Activity 3',
    'Activity 4',
    'Activity 5',
  ];

  const myActivities = [
    'My Activity 1',
    'My Activity 2',
    'My Activity 3',
  ];

  const styles = {
    dashboard: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100vh',
      overflow: 'auto',
      padding: '20px',
    },
    topRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      position: 'relative',
    },
    icon: {
      fontSize: '24px',
      cursor: 'pointer',
    },
    notificationsWrapper: {
      position: 'absolute',
      top: '40px',
      right: '0',
      background: '#fff',
      border: '1px solid #ddd',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      width: '200px',
      zIndex: '10',
    },
    notificationItem: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
      cursor: 'pointer',
    },
    noNotifications: {
      padding: '10px',
      textAlign: 'center',
      color: '#888',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    listContainer: {
      width: '45%',
      paddingRight: '20px',
      borderRight: '1px solid #ddd',
    },
    listItem: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div style={styles.dashboard}>
      {/* Top Row with Home Button */}
      <div style={styles.topRow}>
        <div style={styles.icon}>🏠</div> {/* Home Button */}
        <div style={styles.icon} onClick={toggleNotifications}>
          🔔 {/* Notification Button */}
          {showNotifications && (
            <div style={styles.notificationsWrapper}>
              {notifications.length > 0 ? (
                notifications.map((notif, index) => (
                  <div key={index} style={styles.notificationItem}>
                    {notif}
                  </div>
                ))
              ) : (
                <div style={styles.noNotifications}>No Notifications</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Calendar Activities */}
      <div style={styles.container}>
        {/* Left Column: Calendar of Activities */}
        <div style={styles.listContainer}>
          <h3>Calendar of Activities</h3>
          <ul>
            {activities.map((activity, index) => (
              <li key={index} style={styles.listItem}>
                {activity}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: My Calendar of Activities */}
        <div style={styles.listContainer}>
          <h3>My Calendar of Activities</h3>
          <ul>
            {myActivities.map((activity, index) => (
              <li key={index} style={styles.listItem}>
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserCalendar;
