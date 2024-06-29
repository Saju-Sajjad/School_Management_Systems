import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Index from './Layout';
import AdmissionForm from './Screen/Admin/AdmissionForm';
import AdminDashboard from './Screen/Admin/AdminDashboard';
import StudentAdminForm from './Screen/Student/StudentAdmission';
import AdminRegistrationForm from './Screen/Admin/AdminRegister';
import AdminLoginForm from './Screen/Admin/AdminLogin';
import ProtectedRoute from './ProtectedRoute';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Index />}>
            <Route element={<ProtectedRoute element={<AdminDashboard />} />} />
            <Route path='/admission/admit-student' element={<ProtectedRoute element={<StudentAdminForm />} />} />
            <Route path='/admission/print-form' element={<ProtectedRoute element={<AdmissionForm />} />} />
          </Route>
          <Route path="/register" element={<AdminRegistrationForm />} />
          <Route path="/adminlogin" element={<AdminLoginForm />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}



export default App;
