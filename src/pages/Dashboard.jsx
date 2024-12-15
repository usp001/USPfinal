import React, { useState } from 'react';

const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1', date: '2024-12-15', time: '10:00 AM', location: 'Office' },
    { id: 2, name: 'Event 2', date: '2024-12-16', time: '2:00 PM', location: 'Zoom' },
  ]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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
      cursor: 'pointer',
    },
    modal: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#fff',
      padding: '20px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      zIndex: '20',
      width: '400px',
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    modalInput: {
      marginBottom: '10px',
      width: '90%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '14px',
    },
    modalButton: {
      marginRight: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: '#4caf50',
      color: '#fff',
      borderRadius: '5px',
      fontSize: '14px',
      cursor: 'pointer',
    },
    modalCancelButton: {
      backgroundColor: '#f44336',
    },
    overlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: '15',
    },
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleEditEvent = (event) => {
    setCurrentEvent(event);
    setIsEditing(true);
  };

  const handleSaveEvent = () => {
    if (currentEvent.id) {
      // Update existing event
      setEvents(events.map((ev) => (ev.id === currentEvent.id ? currentEvent : ev)));
    } else {
      // Add new event
      setEvents([...events, { ...currentEvent, id: Date.now() }]);
    }
    setCurrentEvent(null);
    setIsEditing(false);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
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
            <div>Event Rate Chart Will Go Here</div>
          </div>
          <div style={styles.section}>
            <h3 style={styles.h3}>Organizations Performance</h3>
            <div>Performance Chart Will Go Here</div>
          </div>
        </div>

        <div style={styles.rightPart}>
          <div style={styles.calendar}>
            <h3 style={styles.h3}>Calendar</h3>
            <button
              onClick={() => handleEditEvent({ name: '', date: '', time: '', location: '' })}
              style={styles.modalButton}
            >
              Add Event
            </button>
            <ul style={styles.calendarList}>
              {events.map((event) => (
                <li key={event.id} style={styles.calendarItem}>
                  <div onClick={() => handleEditEvent(event)}>
                    {event.name} - {event.date} at {event.time} ({event.location})
                  </div>
                  <button onClick={() => handleDeleteEvent(event.id)} style={styles.modalButton}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Edit/Add Event Modal */}
      {isEditing && (
        <>
          <div style={styles.overlay} onClick={() => setIsEditing(false)}></div>
          <div style={styles.modal}>
            <div style={styles.modalTitle}>
              {currentEvent.id ? 'Edit Event' : 'Add Event'}
            </div>
            <input
              type="text"
              placeholder="Name"
              value={currentEvent.name}
              onChange={(e) => setCurrentEvent({ ...currentEvent, name: e.target.value })}
              style={styles.modalInput}
            />
            <input
              type="date"
              value={currentEvent.date}
              onChange={(e) => setCurrentEvent({ ...currentEvent, date: e.target.value })}
              style={styles.modalInput}
            />
            <input
              type="time"
              value={currentEvent.time}
              onChange={(e) => setCurrentEvent({ ...currentEvent, time: e.target.value })}
              style={styles.modalInput}
            />
            <input
              type="text"
              placeholder="Location"
              value={currentEvent.location}
              onChange={(e) => setCurrentEvent({ ...currentEvent, location: e.target.value })}
              style={styles.modalInput}
            />
            <button onClick={handleSaveEvent} style={styles.modalButton}>
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              style={{ ...styles.modalButton, ...styles.modalCancelButton }}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
