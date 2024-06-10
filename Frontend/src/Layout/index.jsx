import { Box, CssBaseline } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Typography from '@mui/material/Typography';

const Index = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Header />
        <Typography paragraph>
          Main Content goes here.
        </Typography>
      </Box>
    </Box>
  );
};

export default Index;
