import React, { useEffect, useState } from 'react';
import './clock.css'; // Import the CSS file for styling

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondDeg = seconds * 6; // 360° / 60 seconds = 6° per second
    const minuteDeg = minutes * 6 + seconds * 0.1; // 360° / 60 minutes + seconds contribution
    const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 360° / 12 hours + minutes contribution

    return (
        <div className="clock">
            <div className="clock-face">
                {/* Clock markers for 12, 3, 6, 9 */}
                <div className="marker marker-12"></div>
                <div className="marker marker-3"></div>
                <div className="marker marker-6"></div>
                <div className="marker marker-9"></div>
                {/* Clock hands */}
                <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
                <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
                <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
                <div className="center-dot"></div>
            </div>
        </div>
    );
};

export default Clock;