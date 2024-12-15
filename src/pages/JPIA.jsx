import React, { useState } from 'react';

const JPIA = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  const organizations = [
    { logo: '../src/Org/ISClub.jpg', name: 'Information Systems Club', pdf: 'report1.pdf' },
    { logo: '../src/Org/ITSOC.jpg', name: 'Information Technology Society', pdf: 'report2.pdf' },
    { logo: '../src/Org/COMLEAGUE.jpg', name: 'Communicators League', pdf: 'report3.pdf' },
    { logo: '../src/Org/ECONOMICS.jpg', name: 'Organization 3', pdf: 'report4.pdf' },
    { logo: '../src/Org/ENGLISH.jpg', name: 'Organization 4', pdf: 'report5.pdf' },
    { logo: '../src/Org/ENTREP.jpg', name: 'Organization 5', pdf: 'report6.pdf' },
    { logo: '../src/Org/FILIPINO.jpg', name: 'Organization 6', pdf: 'report7.pdf' },
    { logo: '../src/Org/FUTURECOE.jpg', name: 'Organization 7', pdf: 'report8.pdf' },
    { logo: '../src/Org/HOTELIER.jpg', name: 'Organization 8', pdf: 'report9.pdf' },
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
    sectionLabel: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '20px 0 10px',
    },
    organizationsListContainer: {
      maxHeight: '500px',
      overflowY: 'auto',
    },
    organizationsList: {
      listStyleType: 'none',
      padding: '0',
    },
    organizationItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    logo: {
      width: '40px',
      height: '40px',
      marginRight: '10px',
    },
    fileHolder: {
      flexGrow: 1,
      marginLeft: '10px',
      textDecoration: 'underline',
      color: '#007BFF',
      cursor: 'pointer',
    },
    button: {
      padding: '5px 10px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleApprove = (orgName) => {
    alert(`${orgName} approved!`);
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

      {/* Financial Report Section */}
      <div style={styles.sectionLabel}>Financial Report</div>
      <div style={styles.organizationsListContainer}>
        <ul style={styles.organizationsList}>
          {organizations.map((org, index) => (
            <li key={index} style={styles.organizationItem}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={org.logo} alt={org.name} style={styles.logo} />
                <span>{org.name}</span>
              </div>
              <a href={`path/to/${org.pdf}`} style={styles.fileHolder} target="_blank" rel="noopener noreferrer">
                {org.pdf}
              </a>
              <button
                style={styles.button}
                onClick={() => handleApprove(org.name)}
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JPIA;
