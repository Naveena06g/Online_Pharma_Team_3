// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap your App component with CartProvider
root.render(

    <App />

);
