import React from 'react';
import './WeatherWidget.css';
import { FaCloud } from 'react-icons/fa';

const WeatherWidget = ({ temperature, location }) => {
    return (
        <div className="weather-widget">
            <FaCloud className="weather-icon" />
            <div className="weather-info">
                <span className="temperature">{temperature}°</span>
                <span className="location">{location}</span>
            </div>
        </div>
    );
};

export default WeatherWidget;