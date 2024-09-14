import React, { useEffect } from 'react';
import './Home.css';
import { gsap } from 'gsap';
import profilePhoto from '../images/portfolio.jpg';
import AnimatedProfession from './AnimatedProfession';

const Home = () => {
    useEffect(() => {
        // Animate the photo
        gsap.fromTo('.home-photo', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });

        // Animate the title
        gsap.fromTo('.home-title', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });

        // Animate the subtitle
        gsap.fromTo('.home-subtitle', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });

        // Animate the social icons
        gsap.fromTo('.home-social a', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1.5, stagger: 0.2 });
    }, []);
    return (
        <section id="home" className="home">
            <div className="home-content">
                <img src={profilePhoto} alt="Profile" className="home-photo" />
                <div className="home-text">
                    <h1 className="home-title">WELCOME TO MY PORTFOLIO</h1>
                    <p className="home-subtitle">I am ISHA PRAMOD KATEY, <AnimatedProfession /></p>
                </div>
            </div>
            <div className="home-social">
                <a href="https://www.linkedin.com/in/isha-katey-938002259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Isha-Git23" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="mailto:ishakatey@gmail.com">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </section>
    );
};

export default Home;
