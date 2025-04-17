import React from 'react';
import './MainContent.css';
import Advertisement from '../Advertisement/Advertisement';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="container">
                <Advertisement height="200px" />

                <div className="content-section">
                    <div className="section-header">
                        <h2>Primo piano</h2>
                    </div>

                    <div className="content-grid">
                        <div className="main-article">
                            <h1>Assicurazioni auto con documenti falsi per pagare meno: i carabinieri di Marmirolo denunciano due</h1>
                            <p className="article-preview">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas eu risus dignissim, hendrerit magna sed, congue nisl.
                            </p>
                        </div>

                        <div className="sidebar">
                            <Advertisement height="400px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;