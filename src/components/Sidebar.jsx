import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import USPlogo from '../assets/USPlogo.jpg';

const Sidebar = () => {
  const [active, setActive] = useState('/dashboard'); 

  const handleClick = (path) => {
    setActive(path);
  };

  return (
    <div style={{ width: '250px', background: "#acd1af", height: '100vh', padding: '10px' }}>
      <img src={USPlogo} alt="logo" className='USPlogo' style={{ width: '72%', margin: '10%' }} />
      <List style={{ padding: '2%', ListItem: 'center', fontSize: '25px' }}>
        <ListItem
          button
          component={Link}
          to="/dashboard"
          onClick={() => handleClick('/')}
          style={{
            background: active === '/' ? 'white' : 'transparent',
            color: active === '/' ? '#006400' : 'inherit',
          }}
        >
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/organization"
          onClick={() => handleClick('/organization')}
          style={{
            background: active === '/organization' ? 'white' : 'transparent',
            color: active === '/organization' ? '#006400' : 'inherit',
          }}
        >
          <ListItemText primary="Organization" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/announcement"
          onClick={() => handleClick('/announcement')}
          style={{
            background: active === '/announcement' ? 'white' : 'transparent',
            color: active === '/announcement' ? '#006400' : 'inherit',
          }}
        >
          <ListItemText primary="Announcement" />
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
          <ListItemText primary="JPIA" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/create-account"
          onClick={() => handleClick('/create-account')}
          style={{
            background: active === '/create-account' ? 'white' : 'transparent',
            color: active === '/create-account' ? '#006400' : 'inherit',
          }}
        >
          <ListItemText primary="Create Account" />
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
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;