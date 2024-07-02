import React, { useState, useEffect, useRef } from 'react';
import './Home.css'; // Import your custom CSS file for styling

const Home = () => {
    const ref = useRef(0);
    const [text, setText] = useState('');

    useEffect(() => {
        const name = "Jashwanth Reddy"; // Replace with your name
        const interval = setInterval(() => {
            if (ref.current < name.length) {
                ref.current++;
                setText(prevText => prevText + name[ref.current - 1]);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container" id='home'>
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Hi, I'm <span className="highlight">{text}</span></h1>
                    <p className="hero-description">I specialize as a full-stack web developer.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
