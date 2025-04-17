import React from 'react';
import './MainLayout.css';
import MainHeader from "../components/MainHeader/MainHeader"; // Import the CSS for layout styling

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <div className="layout-wrapper">
                {children}
                <MainHeader/>{/* The child components (e.g., Header, MainHeader, etc.) will be injected here */}
            </div>
        </div>
    );
};

export default MainLayout;
