import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import ReportIcon from '@mui/icons-material/Report';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import USPlogo from '../assets/USPlogo.jpg';

const UserSidebar = () => {
  const [active, setActive] = useState('/dashboard');

  const handleClick = (path) => {
    setActive(path);
  };

  return (
    <div style={{ width: '250px', background: '#acd1af', height: '100vh', padding: '10px' }}>
      <img src={USPlogo} alt="logo" className="USPlogo" style={{ width: '72%', margin: '10%' }} />
      <List style={{ padding: '2%', fontSize: '25px' }}>
        <ListItem
          button
          component={Link}
          to="/dashboard"
          onClick={() => handleClick('/dashboard')}
          style={{
            background: active === '/dashboard' ? 'white' : 'transparent',
            color: active === '/dashboard' ? '#006400' : 'inherit',
          }}
        >
          <ListItemIcon>
            <DashboardIcon style={{ color: active === '/dashboard' ? '#006400' : 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/calendar"
          onClick={() => handleClick('/calendar')}
          style={{
            background: active === '/calendar' ? 'white' : 'transparent',
            color: active === '/calendar' ? '#006400' : 'inherit',
          }}
        >
          <ListItemIcon>
            <EventIcon style={{ color: active === '/calendar' ? '#006400' : 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Calendar of Activities" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/accomplishment-report"
          onClick={() => handleClick('/accomplishment-report')}
          style={{
            background: active === '/accomplishment-report' ? 'white' : 'transparent',
            color: active === '/accomplishment-report' ? '#006400' : 'inherit',
          }}
        >
          <ListItemIcon>
            <ReportIcon style={{ color: active === '/accomplishment-report' ? '#006400' : 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Accomplishment Report" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/jpia"
          onClick={() => handleClick('/jpia')}
          style={{
            background: active === '/jpia' ? 'white' : 'transparent',
            color: active === '/jpia' ? '#006400' : 'inherit',
          }}
        >
          <ListItemIcon>
            <GroupIcon style={{ color: active === '/jpia' ? '#006400' : 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="JPIA" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/logout"
          onClick={() => handleClick('/logout')}
          style={{
            background: active === '/logout' ? 'white' : 'transparent',
            color: active === '/logout' ? '#006400' : 'inherit',
          }}
        >
          <ListItemIcon>
            <LogoutIcon style={{ color: active === '/logout' ? '#006400' : 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};

export default UserSidebar;
