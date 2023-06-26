import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="background">
        <Navbar />
        <Footer />
    </div>
  );
};

export default App;