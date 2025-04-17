 import React from 'react';
import Header from './components/Header/Header';
import MainHeader from './components/MainHeader/MainHeader';
import NavBar from './components/NavBar/NavBar';
import MainContent from './components/MainContent/MainContent';
import Advertisement from './components/Advertisement/Advertisement';
import Footer from './components/Footer/Footer';
import MainLayout from "./layouts/MainLayout"; // Import the Footer component

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="content-wrapper">
                <MainLayout />
                <Advertisement />
            </div>
            <Footer />
        </div>
    );
}

export default App;