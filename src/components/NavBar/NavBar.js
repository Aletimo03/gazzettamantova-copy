import React from 'react';
import './NavBar.css';
import { FaStar } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className="main-nav">
            <div className="container nav-container">
                <div className="nav-button special">
                    <FaStar />
                    <span>VOTA PALLONE D'ORO</span>
                </div>

                <div className="nav-links">
                    <a href="#" className="nav-link">CRONACA</a>
                    <a href="#" className="nav-link special">MANTOVA CALCIO</a>
                    <a href="#" className="nav-link">SPETTACOLI</a>
                    <a href="#" className="nav-link">CULTURA</a>
                    <a href="#" className="nav-link">VIDEO</a>
                    <a href="#" className="nav-link">ITALIA</a>
                    <a href="#" className="nav-link">CINEMA</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;