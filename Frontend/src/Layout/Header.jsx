import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import { useTheme, useMediaQuery } from '@mui/material';
import SearchBar from '../components/Form/Form';
import { profileMenuItems, notificationMenuItems, renderMenuItems } from './MenuItems';

const Header = ({ onMenuClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationEl, setNotificationEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (setEl) => (event) => {
    setEl(event.currentTarget);
  };

  const handleMenuClose = (setEl) => (action) => {
    setEl(null);
    console.log(`Action: ${action}`); // Replace with actual actions if needed
  };

  const isMenuOpen = Boolean(anchorEl);
  const isNotificationMenuOpen = Boolean(notificationEl);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#303f9f' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Your School Name
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile && <SearchBar />}
          <IconButton
            size="large"
            aria-label="show new notifications"
            color="inherit"
            onClick={handleMenuOpen(setNotificationEl)}
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleMenuOpen(setAnchorEl)}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose(setAnchorEl)}
      >
        {renderMenuItems(profileMenuItems, handleMenuClose(setAnchorEl))}
      </Menu>
      <Menu
        anchorEl={notificationEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isNotificationMenuOpen}
        onClose={handleMenuClose(setNotificationEl)}
      >
        {renderMenuItems(notificationMenuItems, handleMenuClose(setNotificationEl))}
      </Menu>
    </AppBar>
  );
};

Header.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default Header;
