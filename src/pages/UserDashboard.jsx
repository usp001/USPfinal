import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

const UserDashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  const styles = {
    dashboard: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100vh',
      overflow: 'auto',
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
      position: 'relative',
    },
    notificationDropdown: {
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
    bottomRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    leftPart: {
      width: '45%',
      display: 'flex',
      flexDirection: 'column',
    },
    rightPart: {
      width: '45%',
    },
    section: {
      marginBottom: '20px',
    },
    h3: {
      marginBottom: '10px',
    },
    calendar: {
      padding: '3%',
      margin: '2%',
      background: '#f9f9f9',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    calendarList: {
      listStyleType: 'none',
      padding: '0',
    },
    calendarItem: {
      padding: '5px 0',
      borderBottom: '1px solid #ddd',
    },
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div style={styles.dashboard}>
 
      {/* Top Row with Icons */}
      <div style={styles.topRow}>
        <div style={styles.icon}>🏠</div>
        <div style={styles.icon} onClick={toggleNotifications}>
          🔔
          {showNotifications && (
            <div style={styles.notificationDropdown}>
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

      {/* Bottom Row with Left and Right Sections */}
      <div style={styles.bottomRow}>
        <div style={styles.leftPart}>
          <div style={styles.section}>
            <h3 style={styles.h3}>Event Rates</h3>
            {/* Remove chart temporarily to check for rendering */}
            <div>Event Rate Chart Will Go Here</div>
          </div>
          <div style={styles.section}>
            <h3 style={styles.h3}>Organizations Performance</h3>
            {/* Remove chart temporarily to check for rendering */}
            <div>Performance Chart Will Go Here</div>
          </div>
        </div>

        <div style={styles.rightPart}>
          <div style={styles.calendar}>
            <h3 style={styles.h3}>Calendar</h3>
            {/* Calendar events list here */}
            <ul style={styles.calendarList}>
              <li style={styles.calendarItem}>Event 1</li>
              <li style={styles.calendarItem}>Event 2</li>
              <li style={styles.calendarItem}>Event 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
