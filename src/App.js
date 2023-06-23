import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeNav}>
            Are ye havin' the Craic?
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link custom-navbar-link" to="/" onClick={closeNav}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeNav}>
                  Destinations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services" onClick={closeNav}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeNav}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;


