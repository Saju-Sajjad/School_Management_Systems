import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { AdminPanelSettings } from "@mui/icons-material";
import { School as SchoolIcon } from "@mui/icons-material";
import {
  Grid,
  Box,
  Typography,
  Paper,
  TextField,
  CssBaseline,
  IconButton,
  InputAdornment,
  CircularProgress,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LightPurpleButton } from "../../Style/ButtonStlye";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "red",
    },
    secondary: {
      main: "green",
    },
  },
});

const AdminRegisterPage = () => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const [loader, setLoader] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [adminNameError, setAdminNameError] = useState(false);
  const [schoolNameError, setSchoolNameError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.adminName.value;
    const schoolName = event.target.schoolName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!name || !schoolName || !email || !password) {
      if (!name) setAdminNameError(true);
      if (!schoolName) setSchoolNameError(true);
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      return;
    }

    setLoader(true);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        name,
        email,
        password,
        schoolName,
      });

      if (response.status === 200) {
        navigate("/adminlogin");
      } else {
        // Handle errors (e.g., display error message)
        console.error('Signup error:', response.data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    } finally {
      setLoader(false);
    }
  };

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
    if (name === "adminName") setAdminNameError(false);
    if (name === "schoolName") setSchoolNameError(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          component={Paper}
          elevation={6}
          square
          sx={{
           
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ my: 2, mx: 4, width: "70%", textAlign: "center", p: 3 }}>
            <Typography variant="h4" sx={{ mb: 2, color: "#303f9f" }}>
              School Admin Register
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "#303f9f" }}>
              Create your own school by registering as an admin.
              <br />
              You will be able to add students and faculty and manage the
              system.
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 0, px: 2 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="adminName"
                label="Enter your name"
                name="adminName"
                autoComplete="name"
                autoFocus
                error={adminNameError}
                helperText={adminNameError && "Name is required"}
                onChange={handleInputChange}
                InputProps={{
                  style: { color: "#303f9f" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon sx={{ color: "#303f9f" }} />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ style: { color: "#303f9f" } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="schoolName"
                label="Create your school name"
                name="schoolName"
                autoComplete="off"
                error={schoolNameError}
                helperText={schoolNameError && "School name is required"}
                onChange={handleInputChange}
                InputProps={{
                  style: { color: "#303f9f" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon sx={{ color: "#303f9f" }} />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ style: { color: "#303f9f" } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={emailError}
                helperText={emailError && "Valid email is required"}
                onChange={handleInputChange}
                InputProps={{
                  style: { color: "#303f9f" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "#303f9f" }} />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ style: { color: "#303f9f" } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError}
                helperText={passwordError && "Password is required"}
                onChange={handleInputChange}
                InputProps={{
                  style: { color: "#303f9f" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        {toggle ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ style: { color: "#303f9f" } }}
              />
              <LightPurpleButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loader}
              >
                {loader ? (
                  <CircularProgress size={24} color="primary" />
                ) : (
                  "Register"
                )}
              </LightPurpleButton>
              <Grid container>
                <Grid item xs>
                  <Link
                    component={RouterLink}
                    to="/adminlogin"
                    variant="body2"
                    sx={{ color: "#303f9f" }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
           
          }}  
        >
          <AdminPanelSettings sx={{ fontSize: 350, color: "#303f9f" }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default AdminRegisterPage;
