import React from 'react';
import './SidebarMenu.css';
import { FaTimes, FaSearch } from 'react-icons/fa';

const SidebarMenu = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Sidebar */}
            <aside className={`sidebar-menu ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
                <div className="sidebar-header">
                    <button onClick={onClose} className="close-btn" aria-label="Chiudi menu">
                        <FaTimes />
                    </button>
                </div>

                <div className="sidebar-content">
                    <form className="search-form" role="search">
                        <input type="search" placeholder="Cerca nel sito" aria-label="Cerca" />
                        <button type="submit" aria-label="Cerca">
                            <FaSearch />
                        </button>
                    </form>

                    <div className="menu-blocks">
                        {/* Block 1: Territori */}
                        <div className="menu-block">
                            <h3>Territori</h3>
                            <ul>
                                <li><a href="#">Asola</a></li>
                                <li><a href="#">Bozzolo</a></li>
                                <li><a href="#">Canneto sull'Oglio</a></li>
                                <li><a href="#">Curtatone</a></li>
                                <li><a href="#">Porto Mantovano</a></li>
                            </ul>
                        </div>

                        {/* Block 2: News */}
                        <div className="menu-block">
                            <h3>News</h3>
                            <ul>
                                <li><a href="#">Lombardia</a></li>
                                <li><a href="#">Italia</a></li>
                                <li><a href="#">Mondo</a></li>
                            </ul>
                        </div>

                        {/* Block 3: Argomenti */}
                        <div className="menu-block">
                            <h3>Argomenti</h3>
                            <ul>
                                <li><a href="#">Economia</a></li>
                                <li><a href="#">Sport</a></li>
                                <li><a href="#">Cultura</a></li>
                                <li><a href="#">Spettacoli</a></li>
                            </ul>
                        </div>

                        {/* Block 4: Servizi */}
                        <div className="menu-block">
                            <h3>Servizi</h3>
                            <ul>
                                <li><a href="#">Cinema</a></li>
                                <li><a href="#">Meteo</a></li>
                                <li><a href="#">Traffico</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Conditionally rendered overlay to close the sidebar */}
            {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
        </>
    );
};

export default SidebarMenu;
