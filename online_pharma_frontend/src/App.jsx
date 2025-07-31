


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import { CartProvider } from './components/CartProvider';
// import Hero from './components/Hero';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <CartProvider>
//       <Router>  {/* Ensure Router wraps everything that requires routing */}
//         <div className="app d-flex flex-column min-vh-100">
//           <Header />
          
//           {/* Define Routes with Route components */}
//           <Routes>
//             <Route path="/" element={<Hero />} /> {/* Set Hero to render at the root path */}
//             <Route path="/" element={<Footer />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { CartProvider } from './components/CartProvider';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
// import Profile from './components/Profile';
import Cart from './components/MediStoreCart';
import Tabs from './components/Tabs';
import AdminAuth from './components/AdminAuth';
import DrugManager from './components/DrugManager';
import UserAuth from './components/UserAuth';
import UserDrugs from './components/UserDrugs';


 
function App() {
  const [activeTab, setActiveTab] = useState('admin-auth');
  return (
    <CartProvider>
      <Router>
        {/* Wrap everything with Router */}
        <div className="app d-flex flex-column min-vh-100">
          {/* Header will always be rendered */}
          <Header />
          
          {/* Define Routes with specific path */}
        <Routes>
  <Route
    path="/"
    element={
      <>
        <Hero />
        <AboutUs />
      </>
    }
  />
  <Route path="/cart" element={<Cart />} />
   <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
  
        {activeTab === 'admin-auth' && <AdminAuth />}
        {activeTab === 'admin-drugs' && <DrugManager />}
        {activeTab === 'user-auth' && <UserAuth />}
        {activeTab === 'user-drugs' && <UserDrugs />}
  {/* <Route path="/profile" element={<Profile />} /> */}
</Routes>
<Footer />

         
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
