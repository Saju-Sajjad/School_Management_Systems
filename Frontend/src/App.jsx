import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Layout'; // Ensure correct path import
import Admission from './Screen/Admin/Admission';
import AdmissionForm from './Screen/Admin/AdmissionForm';
import AdminDashboard from './Screen/Admin/AdminDashboard';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Index />}>
          <Route path='/admin/dashboard' element={<AdminDashboard/>} />
          <Route path='/admission/admit-student' element={<Admission/>} />
          <Route path='/admission/print-form' element={<AdmissionForm/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
