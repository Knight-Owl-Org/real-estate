import { Route, Routes } from 'react-router-dom';
import './App.css';
import PerfectHome from './assets/pages/PerfectHome';
import Listing from './assets/pages/Listing';
import Apartment from './assets/pages/Apartment';
import BoxesDisplay from './assets/pages/BoxesDisplay';
import TestimonialCarousel from './assets/pages/TestimonialCarousel';
import ContactUs from './assets/pages/ContactUs';
import Footer from './assets/components/Footer';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={
          <>
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
            <section className="page">
              <ContactUs />
            </section>
            <section className="page">
              <Footer />
            </section>
          </>
        } />
        <Route path="/apartment" element={<Apartment />} />
      </Routes>
    </div>
  );
}

export default App;
