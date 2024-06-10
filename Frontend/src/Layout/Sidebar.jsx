import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer
      variant={open ? "temporary" : "permanent"}
      open={open}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: '#3f51b5', color: 'white' },
      }}
    >
      <Box sx={{ textAlign: 'center', my: 2 }}>
        <SchoolIcon sx={{ fontSize: 40, color: 'white' }} />
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          School Name
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: 'white' }} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ color: 'white' }} />
        </ListItem>
        <Divider sx={{ backgroundColor: 'white' }} />
        <ListItem button>
          <ListItemIcon>
            <SchoolIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Courses" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Students" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon sx={{ color: 'white' }} />
          <ListItemText primary="Teachers" sx={{ color: 'white' }} />
        </ListItem>
        <Divider sx={{ backgroundColor: 'white' }} />
        <ListItem button>
          <ListItemIcon>
            <EventIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Events" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Settings" sx={{ color: 'white' }} />
        </ListItem>
        <Divider sx={{ backgroundColor: 'white' }} />
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: 'white' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

// Define prop types
Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
