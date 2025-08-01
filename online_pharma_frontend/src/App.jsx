import React from 'react'
import './App.css'
import Index from './Components/Catslider/index';
import DiabeticData from './pages/diabatic_care';
import OralCare from './pages/oral_care';
import StomachCareProducts from './pages/stomach_care';
import CardiacCareProducts from './pages/cardiac_care';
import RespiratoryCareProducts from './pages/Respiratory_care';
import LiverCareProducts from './pages/Liver_care';
import ImmunityData from './pages/immunity';
import PainRelief from './pages/painRelief_care';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Index />}/>

          <Route path="/diabatic_care" element={<DiabeticData />}/>
          <Route path="/oral_care" element={<OralCare />} />
        <Route path="/stomach_care" element={<StomachCareProducts />} />
        <Route path="/cardiac_care" element={<CardiacCareProducts />} />
        <Route path="/respiratory_care" element={<RespiratoryCareProducts />} />
        <Route path="/liver_care" element={<LiverCareProducts />} />
        <Route path="/immunity" element={<ImmunityData />} />
        <Route path="/painRelief_care" element={<PainRelief />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
