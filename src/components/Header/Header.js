import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { FaBars, FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import logoUrl from 'url:../../assets/images/placeholder-logo.png';

const Header = () => {
    const headerRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    let lastScrollTop = 0;

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        const headerElement = headerRef.current;

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop === 0) {
                headerElement.style.position = 'absolute';
            } else {
                headerElement.style.position = 'fixed';
            }

            headerElement.style.top = '0';
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call it once on mount to set initial position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header className="header" ref={headerRef}>
                <div className="top-bar">
                    <div className="top-bar-container">
                        <div className="top-bar-left">
                            <button className="menu-toggle" onClick={openSidebar} aria-label="Open menu">
                                <FaBars />
                            </button>

                            <div className="logo-small">
                                <img src={logoUrl} alt="Gazzetta di Mantova" />
                            </div>

                            <nav className="top-nav">
                                <ul>
                                    <li><a href="#"><span className="icon">📰</span> Edizione digitale</a></li>
                                    <li><a href="#"><span className="icon">✉️</span> Newsletter</a></li>
                                    <li><a href="#"><span className="icon">🔔</span> Segnala</a></li>
                                    <li><a href="#">Necrologie</a></li>
                                    <li><a href="#" className="login-btn">Accedi</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="top-right">
                            <div className="social-icons">
                                <a href="#" aria-label="Youtube"><FaYoutube /></a>
                                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            </div>
                            <button className="subscribe-btn">Abbonati</button>
                        </div>
                    </div>
                </div>
                <div className="header-container">
                    {/* This is where your MainHeader component will go */}
                </div>
            </header>

            <SidebarMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
        </>
    );
};

export default Header;