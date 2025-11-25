import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Equipment from './pages/Equipment';
import IchaProfile from './pages/members/Icha';
import ArmithaProfile from './pages/members/Armitha';
import EkaProfile from './pages/members/Eka';
import NurfaikaProfile from './pages/members/Nurfaika';
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/member/icha" element={<IchaProfile />} />
            <Route path="/member/armitha" element={<ArmithaProfile />} />
            <Route path="/member/eka" element={<EkaProfile />} />
            <Route path="/member/nurfaika" element={<NurfaikaProfile />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
