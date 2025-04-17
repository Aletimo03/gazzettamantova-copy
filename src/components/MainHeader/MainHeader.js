import React from 'react';
import './MainHeader.css';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import logoUrl from 'url:../../assets/images/placeholder-main-logo.png';

const MainHeader = () => {
    return (
        <div className="main-header">
            <div className="container">
                <div className="main-header-content">
                    <div className="main-logo">
                        <img src={logoUrl} alt="Test Logo"/>
                    </div>

                    <div className="bottom-line">
                        <div className="temperature">
                            {/* Weather icon and temperature - Fixed comment syntax */}
                            <WeatherWidget temperature={12} location={'Mantova'} />
                        </div>
                        <div className="date">
                            lunedì, 14 aprile 2025
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;