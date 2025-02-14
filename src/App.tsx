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
          <Route path="/about" element={
            <div className="transition-opacity duration-300 ease-in-out">
              <AboutPage />
            </div>
          } />
          <Route path="/community" element={
            <div className="transition-opacity duration-300 ease-in-out">
              <CommunityFull />
            </div>
          } />
          <Route path="/events" element={
            <div className="transition-opacity duration-300 ease-in-out">
              <EventsPage />
            </div>
          } />
          <Route path="/workshop" element={
            <div className="transition-opacity duration-300 ease-in-out">
              <Workshop />
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App