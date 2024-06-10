import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Index from './Layout/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Index />
    </ThemeProvider>
  );
}

export default App;
