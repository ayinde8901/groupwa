import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import Notify from '../src/components/Notify'
import Profile from '../src/components/Profile'
import Security from '../src/components/Security'
import { Routes, Route } from 'react-router-dom';
import Directionpage from './components/Directionpage'
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/security" element={<Security />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notify" element={<Notify />} />
        <Route path="/direction" element={<Directionpage />} />

      </Routes>
      {/* Footer will always be visible */}
      <Footer />
    </div>
  );
}

export default App;
