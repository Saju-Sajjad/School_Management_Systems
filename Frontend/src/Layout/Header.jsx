
import PropTypes from 'prop-types'; // Import PropTypes
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ onMenuClick }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h6" component="div">
            Your School Name
          </Typography>
          <Typography variant="subtitle1" component="div">
            Inspiring Excellence
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Define prop types
Header.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default Header;
