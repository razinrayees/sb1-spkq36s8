import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Community from './components/Community';
import CommunityFull from './components/CommunityFull';
import Events from './components/Events';
import EventsPage from './components/EventsPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import Workshop from './components/Workshop';
import RegisterPage from './components/RegisterPage';
import WorkshopRegistration from './components/WorkshopRegistration'; // Import the correct file

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#00304D]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="transition-opacity duration-300 ease-in-out">
              <Hero />
              <Community />
              <Events id="events" />
              <Contact id="contact" />
            </div>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community" element={<CommunityFull />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/workshopregister" element={<WorkshopRegistration />} /> {/* Add the new route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
