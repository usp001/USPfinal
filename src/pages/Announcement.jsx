import React, { useState } from 'react';

const Announcement = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedOrgs, setSelectedOrgs] = useState([]);
  const [file, setFile] = useState(null);
  const [archivedMessages, setArchivedMessages] = useState([]);

  const organizations = [
    { name: 'Organization 1' },
    { name: 'Organization 2' },
    { name: 'Organization 3' },
    { name: 'Organization 4' },
    { name: 'Organization 5' },
  ];

  const handleNotificationToggle = () => {
    setShowNotifications(!showNotifications);
  };

  const handleArchive = () => {
    if (message) {
      setArchivedMessages([...archivedMessages, message]);
      setMessage('');
    }
  };

  const handleSelectAll = () => {
    if (selectedOrgs.length === organizations.length) {
      setSelectedOrgs([]); // Deselect all
    } else {
      setSelectedOrgs(organizations.map(org => org.name)); // Select all
    }
  };

  const handleSendMessage = () => {
    if (message && selectedOrgs.length > 0) {
      alert(`Message sent to: ${selectedOrgs.join(', ')}`);
      setMessage('');
      setSelectedOrgs([]);
      setFile(null);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const styles = {
    dashboard: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100vh',
      overflow: 'auto',
      padding: '30px',
      backgroundColor: '#f4f7fb',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box',
    },
    topRow: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '10px 0',
      position: 'relative',
    },
    icon: {
      fontSize: '24px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      marginRight: '15px',
    },
    notificationDropdown: {
      position: 'absolute',
      top: '40px',
      right: '20',
      background: '#fff',
      border: '1px solid #ddd',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      width: '250px',
      zIndex: '10',
      maxHeight: '250px',
      overflowY: 'auto',
    },
    notificationItem: {
      padding: '12px 16px',
      borderBottom: '1px solid #ddd',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    bottomSection: {
      marginTop: '30px',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '20px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '16px',
      boxSizing: 'border-box',
      backgroundColor: '#f9f9f9',
      color: '#333',
    },
    fileInput: {
      marginBottom: '15px',
      padding: '10px 15px',
      backgroundColor: '#f4f7fb',
      border: '1px solid #ddd',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    orgSelection: {
      marginBottom: '1%',
      fontSize: '16px',
      width:'20%',
    },
    orgOption: {
      display: 'flex',
      alignItems: 'center',
      padding: '5px 0',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginBottom: '1%',
      marginRight: '70%',
      width: '100%', // Ensures the label takes up full width
      whiteSpace: 'nowrap', // Prevents the label from wrapping
    },
    orgCheckbox: {
      marginRight: '50%',
    },
    sendButton: {
      padding: '12px 30px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
      fontSize: '16px',
      width: '100%',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.dashboard}>
      {/* Top Row with Icons */}
      <div style={styles.topRow}>
        <div style={styles.icon} className="home-button">
          🏠
        </div>
        <div style={styles.icon} onClick={handleArchive} className="archive-button">
          📦
        </div>
        <div style={styles.icon} onClick={handleNotificationToggle} className="notification-button">
          🔔
          {showNotifications && (
            <div style={styles.notificationDropdown}>
              <div style={styles.notificationItem}>Notification 1</div>
              <div style={styles.notificationItem}>Notification 2</div>
              <div style={styles.notificationItem}>Notification 3</div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section for Message, File Upload, and Org Selection */}
      <div style={styles.bottomSection}>
        {/* File Upload */}
        <input type="file" onChange={handleFileChange} style={styles.fileInput} />

        {/* Message Input */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          style={styles.input}
        />

        {/* Organization Selection */}
        <div style={styles.orgSelection}>
          <label style={styles.orgOption}>
            <input
              type="checkbox"
              checked={selectedOrgs.length === organizations.length}
              onChange={handleSelectAll}
              style={styles.orgCheckbox}
            />
            Select All
          </label>
          {organizations.map((org, index) => (
            <label key={index} style={styles.orgOption}>
              <input
                type="checkbox"
                checked={selectedOrgs.includes(org.name)}
                onChange={() => {
                  if (selectedOrgs.includes(org.name)) {
                    setSelectedOrgs(selectedOrgs.filter((o) => o !== org.name));
                  } else {
                    setSelectedOrgs([...selectedOrgs, org.name]);
                  }
                }}
                style={styles.orgCheckbox}
              />
              {org.name}
            </label>
          ))}
        </div>

        {/* Send Button */}
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Announcement;
