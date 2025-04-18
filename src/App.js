import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import MainContent from './components/MainContent/MainContent';
import Advertisement from './components/Advertisement/Advertisement';
import Footer from './components/Footer/Footer';
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <div className="app-container">
            <header>
                <Header />
                <NavBar />
            </header>

            <main className="content-wrapper">
                <MainLayout />
                <MainContent/>
            </main>


            <aside>
                <Advertisement />
            </aside>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
