import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '../App.css'


const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleNavbar = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleNavbar);

        return () => {
            window.removeEventListener('scroll', toggleNavbar);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: 'easeIn'
        });
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${isVisible ? 'visible' : 'invisible'}`}>
            <div className="container">
                <span className="navbar-brand mx-auto" onClick={scrollToTop}>Geereddy Jashwnath Reddy</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <ScrollLink to="home" className="nav-link" smooth={true} duration={800}>Home</ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink to="about1" className="nav-link" smooth="easeIn" duration={600} delay={0} offset={-100}>About</ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink to="projects" className="nav-link" smooth={true} duration={800}  offset={-70}> Projects</ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink to="experience" className="nav-link" smooth={true} duration={800} offset={-70}>Experience</ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink to="contact" className="nav-link" smooth={true} duration={800} offset={-70}>Contact</ScrollLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
