import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <div className="background">
      <Navbar />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;