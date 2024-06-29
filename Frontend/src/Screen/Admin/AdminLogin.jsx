import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  Grid,
  Box,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  IconButton,
  InputAdornment,
  CircularProgress,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LightPurpleButton } from "../../Style/ButtonStlye"; // Import the styled buttons
import { login } from "../../Store"; // Import the login action

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#303f9f",
    },
    secondary: {
      main: "#7f56da",
    },
  },
});

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Use dispatch to send actions to Redux

  const [toggle, setToggle] = useState(false);
  const [loader, setLoader] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const email = event.target.email.value;
    const password = event.target.password.value;
  
  
    if (!email || !password) {
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      return;
    }
  
    setLoader(true);
  
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });
  
      console.log('Login response:', response);
  
      if (response.status === 200) {
        dispatch(login(response.data)); // Dispatch the login action to Redux
        navigate("/"); // Redirect to the admin dashboard on success
      } else {
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setLoader(false);
    }
  };
  
  

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
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
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ my: 8, mx: 4, width: "70%", textAlign: "center", p: 5 }}>
            <Typography variant="h4" sx={{ mb: 2, color: "#303f9f" }}>
              Admin Login
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "#303f9f" }}>
              Welcome back! Please enter your details to log in.
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
                id="email"
                label="Enter your email"
                name="email"
                autoComplete="email"
                autoFocus
                error={emailError}
                helperText={emailError && "Email is required"}
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
                type={toggle ? "text" : "password"}
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
                        edge="start"
                        sx={{ color: "#303f9f" }}
                        onClick={() => setToggle(!toggle)}
                      >
                        {toggle ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ style: { color: "#303f9f" } }}
              />
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox value="remember" style={{ color: "#303f9f" }} />
                  }
                  label="Remember me"
                  sx={{ color: "#303f9f" }}
                />
                <StyledLink
                  component={RouterLink}
                  to="#"
                  variant="body2"
                  sx={{ color: "#303f9f" }}
                >
                  Forgot password?
                </StyledLink>
              </Grid>
              <LightPurpleButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#303f9f" }}
              >
                {loader ? (
                  <CircularProgress color="primary" size={24} /> // Use color="primary"
                ) : (
                  "Login"
                )}
              </LightPurpleButton>
              <Grid container justifyContent="center">
                <Typography variant="body2" sx={{ color: "#303f9f", mr: 1 }}>
                  Dont have an account?
                </Typography>
                <StyledLink
                  component={RouterLink}
                  to="/register"
                  variant="body2"
                  sx={{ color: "#303f9f" }}
                >
                  Sign up
                </StyledLink>
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
            backgroundColor: "#f0f0f0", // Light grey background for contrast
          }}  
        >
          <AccountCircleIcon sx={{ fontSize: 350, color: "#303f9f" }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginPage;

const StyledLink = styled(Link)`
  margin-top: 9px;
  text-decoration: none;
  color: #7f56da;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
