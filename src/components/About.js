import React, { useEffect } from 'react';
import './About.css';
import { gsap } from 'gsap';

const About = () => {
    useEffect(() => {
        gsap.fromTo(".line.left", { width: 0 }, { width: '50%', duration: 1 });
        gsap.fromTo(".line.right", { width: 0 }, { width: '50%', duration: 1, delay: 0.5 });
    }, []);

    return (
        <section id="about" className="about">
            <div className="line left"></div>
            <h2>ABOUT ME</h2>
            <div className="line right"></div>
            <p>A proactive and committed individual, eager to contribute to the tech world with my skills and creativity.</p>
        </section>
    );
};

export default About;
