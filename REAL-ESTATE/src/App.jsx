import { useState } from 'react'
import './App.css'
import PerfectHome from './assets/pages/PerfectHome'
import Listing from './assets/pages/Listing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Apartment from './assets/pages/Apartment';
import BoxesDisplay from './assets/pages/BoxesDisplay';
import TestimonialCarousel from './assets/pages/TestimonialCarousel';


function App() {


  return (
    <div className="app-container">
      <section className="page">
        <PerfectHome />
      </section>
      <section className="page">
        <Listing />
      </section>
      <section className="page">
        <BoxesDisplay />
      </section>
      <section className="page">
        <TestimonialCarousel />
      </section>
      <Routes>
        <Route path="/apartment" element={<Apartment />} />
      </Routes>
    </div>
  )
}

export default App
