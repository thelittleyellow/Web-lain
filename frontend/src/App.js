import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import IchaProfile from './pages/members/Icha';
import Member2 from './pages/members/Member2';
import Member3 from './pages/members/Member3';
import Member4 from './pages/members/Member4';
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/member/icha" element={<IchaProfile />} />
            <Route path="/member/2" element={<Member2 />} />
            <Route path="/member/3" element={<Member3 />} />
            <Route path="/member/4" element={<Member4 />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
