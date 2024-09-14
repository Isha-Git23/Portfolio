import React, { useEffect } from 'react';
import './Projects.css';
import { gsap } from 'gsap';

// Sample images, replace with your actual image paths
// import project1Image from '../images/project1.png';
// import project2Image from '../images/project2.png';
// import project3Image from '../images/project3.png';

const Projects = () => {
    useEffect(() => {
        gsap.fromTo(".projects", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });
    }, []);

    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
                <a href="https://link-to-project1.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-card">

                        <h3>DBMS Mini - Hotel Management System</h3>
                        <p>Tech Used : Html , CSS , JS , Php , MySQL</p>
                    </div>
                </a>
                <a href="https://link-to-project2.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-card">

                        <h3>SE Mini - To-do List </h3>
                        <p>Tech Used - MERN </p>
                    </div>
                </a>
                <a href="https://link-to-project3.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-card">

                        <h3>Portfolio</h3>
                        <p>Tech Used : Html , CSS , JS , MERN </p>
                    </div>
                </a>

            </div>
        </section>
    );
};

export default Projects;