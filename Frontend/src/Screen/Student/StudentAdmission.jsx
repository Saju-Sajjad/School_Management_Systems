import { useState } from 'react';
import { Grid, Paper, Typography, Box, TextField, Button, MenuItem, CircularProgress } from '@mui/material';
import { Save } from '@mui/icons-material';
import { classes, bloodGroups } from '../../Layout/MenuItems';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDropzone } from 'react-dropzone';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  rollNumber: Yup.string().required('Roll Number is required'),
  gender: Yup.string().required('Gender is required'),
  dateOfBirth: Yup.date().nullable().required('Date of Birth is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  bloodGroup: Yup.string().required('Blood Group is required'),
  phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  class: Yup.string().required('Class is required'),
  admissionId: Yup.string().required('Admission ID is required'),
});

function StudentAdminForm() {
  const initialValues = {
    firstName: '',
    lastName: '',
    rollNumber: '',
    gender: '',
    dateOfBirth: null,
    email: '',
    bloodGroup: '',
    phone: '',
    class: '',
    admissionId: '',
    shortBio: '',
    picture: null, // This will hold the picture file object
  };

  const [imageFile, setImageFile] = useState(null); // State to hold the dropped image file
  const [loading, setLoading] = useState(false); // State to manage loading state

  const handleSubmit = (values, actions) => {
    console.log('Form Data:', values);
    // Simulate API call or any asynchronous operation here
    setLoading(true); // Show loading indicator

    setTimeout(() => {
      // Simulate success
      setLoading(false); // Hide loading indicator
      actions.resetForm(); // Reset form values
      setImageFile(null);
      alert('Form submitted successfully!');
    }, 1000);
  };

  // UseDropzone hook configuration
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImageFile(acceptedFiles[0]); // Set the dropped image file
      setLoading(false); // Set loading state to false after drop
    },
    multiple: false,
    accept: 'image/*', // Accept only image files
    onDragEnter: () => setLoading(true),
    onDragLeave: () => setLoading(false),
  });

  return (
    <Box p={3}>
      <Typography variant="h6" sx={{ mb: 2 }}>Student Administration Form</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 2, bgcolor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 8 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid, dirty, values, setFieldValue, errors }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        autoFocus
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        required
                      />
                      <ErrorMessage name="firstName">
                        {msg => <Typography variant="body2" sx={{ color: 'red', mt: 1 }}>{msg}</Typography>}
                      </ErrorMessage>
                    </Grid>
                    <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            fullWidth
            name="lastName"
            label="Last Name"
            variant="outlined"
            required
            error={Boolean(errors.lastName)}
          />
          <ErrorMessage name="lastName">
            {msg => <Typography variant="body2" sx={{ color: 'red', mt: 1 }}>{msg}</Typography>}
          </ErrorMessage>
        </Grid>

        {/* RollNumber Field */}
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            fullWidth
            name="rollNumber"
            label="Roll Number"
            variant="outlined"
            required
            error={Boolean(errors.rollNumber)}
          />
          <ErrorMessage name="rollNumber">
            {msg => <Typography variant="body2" sx={{ color: 'red', mt: 1 }}>{msg}</Typography>}
          </ErrorMessage>
        </Grid>

        {/* Gender Field */}
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            fullWidth
            name="gender"
            label="Gender"
            variant="outlined"
            select
            required
            error={Boolean(errors.gender)}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Field>
          <ErrorMessage name="gender">
            {msg => <Typography variant="body2" sx={{ color: 'red', mt: 1 }}>{msg}</Typography>}
          </ErrorMessage>
        </Grid>

        {/* Email Field */}
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            required
            error={Boolean(errors.email)}
          />
          <ErrorMessage name="email">
            {msg => <Typography variant="body2" sx={{ color: 'red', mt: 1 }}>{msg}</Typography>}
          </ErrorMessage>
        </Grid>

        {/* BloodGroup Field */}
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            fullWidth
            name="bloodGroup"
            label="Blood Group"
            variant="outlined"
            select
            required
            error={Boolean(errors.bloodGroup)}
          >
            {bloodGroups.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>
          <ErrorMessage name="bloodGroup">
            {msg => <Typography variant="body2" sx={{ color: 'red', mt: 1 }}>{msg}</Typography>}
          </ErrorMessage>
        </Grid>

        {/* Phone Field */}
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            fullWidth
            name="phone"
            label="Phone"
            variant="outlined"
            required
            error={Boolean(errors.phone)}
          />
          <ErrorMessage name="phone">
            {msg => <Typography variant="body2" sx={{ color: 'red', mt: 1 }}>{msg}</Typography>}
          </ErrorMessage>
        </Grid>

        {/* Class Field */}
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            fullWidth
            name="class"
            label="Class"
            variant="outlined"
            select
            required
            error={Boolean(errors.class)}
          >
            {classes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>
          <ErrorMessage name="class">
            {msg => <Typography variant="body2" sx={{ color: 'red', mt: 1 }}>{msg}</Typography>}
          </ErrorMessage>
        </Grid>

        {/* AdmissionId Field */}
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            fullWidth
            name="admissionId"
            label="Admission ID"
            variant="outlined"
            required
            error={Boolean(errors.admissionId)}
          />
          <ErrorMessage name="admissionId">
            {msg => <Typography variant="body2" sx={{ color: 'red', mt: 1 }}>{msg}</Typography>}
          </ErrorMessage>
        </Grid>

        {/* DateOfBirth Field */}
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              name="dateOfBirth"
              label="Date of Birth"
              inputFormat="MM/DD/YYYY"
              value={values.dateOfBirth}
              onChange={(date) => setFieldValue('dateOfBirth', date)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={Boolean(errors.dateOfBirth)}
                  helperText={errors.dateOfBirth}
                />
              )}
            />
          </LocalizationProvider>
          <ErrorMessage name="dateOfBirth">
            {msg => <Typography variant="body2" sx={{ color: 'red', mt: 1 }}>{msg}</Typography>}
          </ErrorMessage>
        </Grid>
        
        {/* Picture Upload Field */}
        <Grid item xs={12}>
          <div {...getRootProps()} style={{ minHeight: '150px', border: '2px dashed #ddd', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input {...getInputProps()} />
            {loading ? (
              <CircularProgress />
            ) : imageFile ? (
              <img src={URL.createObjectURL(imageFile)} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            ) : (
              <Typography variant="body1" sx={{ color: '#666', textAlign: 'center' }}>
                {isDragActive ? "Drop the image here" : "Drag 'n' drop a picture here, or click to select one"}
              </Typography>
            )}
          </div>
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            startIcon={<Save />}
            disabled={!isValid || !dirty || isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Save'}
          </Button>
        </Grid>
      </Grid>
    </Form>
  )}
</Formik>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentAdminForm;
