import React from 'react';
import './Advertisement.css';

const Advertisement = ({ height = '250px' }) => {
    return (
        <div className="advertisement" style={{ height }}>
            <div className="ad-content">
                <p>ADVERTISEMENT</p>
                <p>This is a placeholder for ad content</p>
            </div>
        </div>
    );
};

export default Advertisement;