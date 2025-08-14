import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress
} from '@mui/material';
import { authService } from '../../services/authService';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authService.login(formData);
      if (response.success) {
        navigate('/dashboard');
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Drug Management System
          </Typography>
          <Typography component="h2" variant="h6" align="center" gutterBottom>
            Sign In
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Sign In'}
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="primary">
                  Don't have an account? Sign Up
                </Typography>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import {
//   Container,
//   Paper,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Alert,
//   CircularProgress
// } from '@mui/material';
// import { authService } from '../../services/authService';
// import './Login.css'; // Make sure the path is correct

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await authService.login(formData);
//       if (response.success) {
//         navigate('/dashboard');
//       } else {
//         setError(response.message || 'Login failed');
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || 'An error occurred during login');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-login d-flex justify-content-center align-items-center min-vh-100">
//       <Container maxWidth="xs">
//         <Paper elevation={5} className="p-4 rounded">
//           <Typography component="h1" variant="h5" align="center" gutterBottom>
//             Drug Management System
//           </Typography>
//           <Typography component="h2" variant="h6" align="center" gutterBottom>
//             Sign In
//           </Typography>

//           {error && (
//             <Alert severity="error" className="mb-3">
//               {error}
//             </Alert>
//           )}

//           <Box component="form" onSubmit={handleSubmit}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               className="mt-3 mb-2"
//               disabled={loading}
//             >
//               {loading ? <CircularProgress size={24} /> : 'Sign In'}
//             </Button>

//             <Box sx={{ textAlign: 'center' }}>
//               <Link to="/register" style={{ textDecoration: 'none' }}>
//                 <Typography variant="body2" color="primary">
//                   Don't have an account? Sign Up
//                 </Typography>
//               </Link>
//             </Box>
//           </Box>
//         </Paper>
//       </Container>
//     </div>
//   );
// };

// export default Login;
