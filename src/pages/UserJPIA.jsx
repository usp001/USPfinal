import React, { useState } from 'react';

const UserJPIA = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('Pending');
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setStatus('Pending'); // Reset to pending when a new file is uploaded
      setNotifications([...notifications, 'New file uploaded, awaiting approval.']);
    }
  };

  const handleApprove = () => {
    setStatus('Approved');
    setNotifications([...notifications, 'File approved!']);
  };

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
    fileInput: {
      marginBottom: '20px',
    },
    fileStatus: {
      margin: '10px 0',
      fontWeight: 'bold',
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

  return (
    <div style={styles.dashboard}>
      {/* Top Row with Notifications */}
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

      {/* File Upload Section */}
      <div style={styles.sectionLabel}>Upload Your Report</div>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        style={styles.fileInput}
      />
      {file && (
        <div>
          <p><strong>Uploaded File:</strong> {file.name}</p>
          <div style={styles.fileStatus}>Status: {status}</div>
        </div>
      )}
      <button style={styles.button} onClick={handleApprove}>
        Approve
      </button>
    </div>
  );
};

export default UserJPIA;
