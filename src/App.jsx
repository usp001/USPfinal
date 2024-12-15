import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserSidebar from './components/UserSidebar'; 
import Dashboard from './pages/Dashboard';
import Organization from './pages/Organization';
import Announcement from './pages/Announcement';
import JPIA from './pages/Jpia';
import CreateAccount from './pages/CreateAccount';
import LandingPage from './pages/LandingPage';
import Logout from './pages/Logout'; 
import UserAccomplishment from './pages/UserAccomplishment'; 
import UserCalendar from './pages/UserCalendar';
import UserDashboard from './pages/UserDashboard';
import UserJPIA from './pages/UserJPIA';

const App = () => {
  const location = useLocation();

  // Hide Sidebar on LandingPage
  const isLandingPage = location.pathname === '/';

  // Track the active route in state for the Sidebar
  const [active, setActive] = useState(location.pathname);

  // Update active state on route change
  React.useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div style={{ display: 'flex' }}>
      {/* Conditionally render Sidebar */}
      {!isLandingPage && <Sidebar active={active} setActive={setActive} />}
      
      {/* Conditionally render UserSidebar */}
      {!isLandingPage && location.pathname.startsWith('/user') && (
        <UserSidebar active={active} setActive={setActive} />
      )}

      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/jpia" element={<JPIA />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/logout" element={<Logout />} />
          
          {/* User-specific pages */}
          <Route path="/pages/UserDashboard" element={<UserDashboard />} />
          <Route path="/pages/UserAccomplishment" element={<UserAccomplishment />} />
          <Route path="/pages/UserCalendar" element={<UserCalendar />} />
          <Route path="/pages/UserJPIA" element={<UserJPIA />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
