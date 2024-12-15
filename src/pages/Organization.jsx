import React, { useState } from 'react';

const Organization = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  const organizations = [
    { logo: '../src/Org/ISClub.jpg', name: 'Information Systems Club' },
    { logo: '../src/Org/ITSOC.jpg', name: 'Information Technology Society' },
    { logo: '../src/Org/COMLEAGUE.jpg', name: 'Communicators League' },
    { logo: '../src/Org/ECONOMICS.jpg', name: 'Organization 3' },
    { logo: '../src/Org/ENGLISH.jpg', name: 'Organization 4' },
    { logo:'../src/Org/ENTREP.jpg', name: 'Organization 5' },
    { logo: '../src/Org/FILIPINO.jpg', name: 'Organization 6' },
    { logo: '../src/Org/FUTURECOE.jpg', name: 'Organization 7' },
    { logo: '../src/Org/HOTELIER.jpg', name: 'Organization 8' },
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
    organizationsListContainer: {
      maxHeight: '500px', // Set a max height to allow scrolling
      overflowY: 'auto', // Enable vertical scrolling
      marginTop: '20px',
    },
    organizationsList: {
      listStyleType: 'none',
      padding: '0',
    },
    organizationItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    logo: {
      width: '40px',
      height: '40px',
      marginRight: '10px',
    },
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div style={styles.dashboard}>
      {/* Top Row with Icons */}
      <div style={styles.topRow}>
        <div style={styles.icon}>🏠</div> {/* Home Button */}
        <div style={styles.icon} onClick={toggleNotifications}>
          🔔 {/* Notification Button */}
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

      {/* Scrollable List of Organizations */}
      <div style={styles.organizationsListContainer}>
        <ul style={styles.organizationsList}>
          {organizations.map((org, index) => (
            <li key={index} style={styles.organizationItem}>
              <img src={org.logo} alt={org.name} style={styles.logo} />
              <span>{org.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Organization;
