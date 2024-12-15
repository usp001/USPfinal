import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions like clearing user data
    // Redirect to the landing page or login page
    navigate('/');
  };

  return (
    <div>
      <h2>You have been logged out</h2>
      <button onClick={handleLogout} style={{      padding: '5px 10px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',}}>Go to Landing Page</button>
    </div>
  );
};

export default Logout;
