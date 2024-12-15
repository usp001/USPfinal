import React, { useState } from 'react';

const JPIA = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  const styles = {
    dashboard: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100vh',
      overflow: 'auto',
      padding: '20px',
      backgroundColor: '#f4f4f9',
      fontFamily: 'Arial, sans-serif',
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
      fontSize: '22px',
      fontWeight: 'bold',
      margin: '20px 0 10px',
      textAlign: 'center',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
    input: {
      padding: '12px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxSizing: 'border-box',
      width: '100%',
    },
    fileInput: {
      padding: '10px',
      fontSize: '14px',
      border: 'none',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    button: {
      padding: '12px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Organization account created successfully!');
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

      {/* Create Organization Form */}
      <div style={styles.sectionLabel}>Create Organization Account</div>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <label style={{ fontWeight: 'bold', fontSize: '16px' }}>Upload Logo:</label>
        <input
          type="file"
          accept="image/*"
          style={styles.fileInput}
          required
        />
        <input
          type="text"
          placeholder="Organization Name"
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Organization Email"
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          required
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JPIA;
