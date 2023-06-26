import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Destinations from './Destinations';
import Accommodation from './Accommodation';
import Contact from './Contact';


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <Router>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/" onClick={closeNav}>
                        <img src="/images/ireland(1).png" alt="Ireland Flag" className="navbar-logo" />
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
                                <Link className="nav-link" to="/destinations" onClick={closeNav}>
                                    Destinations
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/accommodation" onClick={closeNav}>
                                    Accommodation
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
            {/* <div className="container bg"> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destinations" element={<Destinations />} />
                    <Route path="/accommodation" element={<Accommodation />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            {/* </div> */}
        </Router>
    );
};

export default Navbar;