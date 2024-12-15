import React, { useState } from 'react';

const UserAccomplishment = () => {
  const [showNotifications, setShowNotifications] = useState(false);  
  const [showModal, setShowModal] = useState(false); // State for file upload modal
  const [file, setFile] = useState(null); // State to hold the selected file
  const [isUploading, setIsUploading] = useState(false); // State for upload status
  const [uploadedFiles, setUploadedFiles] = useState([]); // State to hold list of uploaded files
  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

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
    accomplishmentLabel: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
    modal: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
    },
    fileInput: {
      marginBottom: '10px',
    },
    uploadButton: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
    submitButton: {
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
    table: {
      width: '100%',
      marginTop: '20px',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#f4f4f4',
      fontWeight: 'bold',
      padding: '10px',
      border: '1px solid #ddd',
    },
    tableCell: {
      padding: '10px',
      border: '1px solid #ddd',
      textAlign: 'center',
    },
    deleteButton: {
      padding: '5px 10px',
      backgroundColor: '#FF4C4C',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        setUploadedFiles([...uploadedFiles, { name: file.name, status: 'Uploaded' }]);
        setShowModal(false); // Close the modal after upload
        alert('File uploaded successfully!');
      }, 2000); // Simulate file upload delay
    }
  };

  const handleDeleteFile = (fileName) => {
    setUploadedFiles(uploadedFiles.filter(file => file.name !== fileName));
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

      {/* Accomplishment Report Label */}
      <div style={styles.accomplishmentLabel}>Accomplishment Report</div>

      {/* Modal for File Upload */}
      {showModal && (
        <>
          <div style={styles.overlay} onClick={() => setShowModal(false)}></div>
          <div style={styles.modal}>
            <h3>Upload Accomplishment Report</h3>
            <input
              type="file"
              accept=".pdf"
              style={styles.fileInput}
              onChange={handleFileChange}
            />
            <div>
              {isUploading ? (
                <div>Uploading...</div>
              ) : (
                <button style={styles.submitButton} onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </>
      )}

      {/* Button to trigger modal */}
      <button style={styles.uploadButton} onClick={() => setShowModal(true)}>
        Upload Report
      </button>

      {/* Table for Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>File Name</th>
              <th style={styles.tableHeader}>Status</th>
              <th style={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {uploadedFiles.map((file, index) => (
              <tr key={index}>
                <td style={styles.tableCell}>{file.name}</td>
                <td style={styles.tableCell}>{file.status}</td>
                <td style={styles.tableCell}>
                  <button
                    style={styles.deleteButton}
                    onClick={() => handleDeleteFile(file.name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserAccomplishment;
