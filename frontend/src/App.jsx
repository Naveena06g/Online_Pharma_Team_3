// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { authService } from './services/authService';

// // Components
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import Dashboard from './components/dashboard/Dashboard';
// import DrugList from './components/drugs/DrugList';
// import DrugForm from './components/drugs/DrugForm';
// import OrderList from './components/orders/OrderList';
// import OrderForm from './components/orders/OrderForm';
// import UserProfile from './components/user/UserProfile';
// import UserManagement from './components/admin/UserManagement';
// import Layout from './components/layout/Layout';

// // 🔐 Protected Route Component
// const ProtectedRoute = ({ children, adminOnly = false }) => {
//   const isAuthenticated = authService.isAuthenticated();
//   const isAdmin = authService.isAdmin();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   if (adminOnly && !isAdmin) {
//     return <Navigate to="/dashboard" replace />;
//   }

//   return children;
// };

// // 🎨 MUI Theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#dc004e',
//     },
//   },
// });

// // 🧠 App Component
// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Routes>

//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Protected Routes */}
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Layout />
//               </ProtectedRoute>
//             }
//           >
//             <Route index element={<Navigate to="/dashboard" replace />} />
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="drugs" element={<DrugList />} />
//             <Route
//               path="drugs/add"
//               element={
//                 <ProtectedRoute adminOnly>
//                   <DrugForm />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="drugs/edit/:id"
//               element={
//                 <ProtectedRoute adminOnly>
//                   <DrugForm />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="orders" element={<OrderList />} />
//             <Route path="orders/new" element={<OrderForm />} />
//             <Route path="profile" element={<UserProfile />} />
//             <Route
//               path="admin/users"
//               element={
//                 <ProtectedRoute adminOnly>
//                   <UserManagement />
//                 </ProtectedRoute>
//               }
//             />
//           </Route>
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { authService } from './services/authService';

// Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import DrugList from './components/drugs/DrugList';
import DrugForm from './components/drugs/DrugForm';
import OrderList from './components/orders/OrderList';
import OrderForm from './components/orders/OrderForm';
import UserProfile from './components/user/UserProfile';
import UserManagement from './components/admin/UserManagement';
import Layout from './components/layout/Layout';

// Protected Route Component
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const isAuthenticated = authService.isAuthenticated();
  const isAdmin = authService.isAdmin();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

// Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="drugs" element={<DrugList />} />
            <Route path="drugs/add" element={
              <ProtectedRoute adminOnly>
                <DrugForm />
              </ProtectedRoute>
            } />
            <Route path="drugs/edit/:id" element={
              <ProtectedRoute adminOnly>
                <DrugForm />
              </ProtectedRoute>
            } />
            <Route path="orders" element={<OrderList />} />
            <Route path="orders/new" element={<OrderForm />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="admin/users" element={
              <ProtectedRoute adminOnly>
                <UserManagement />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;