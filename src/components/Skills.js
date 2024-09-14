import React from 'react';
import './Skills.css';

const skills = {
    frontEnd: [
        { name: 'HTML', icon: '/icons/html.svg', info: 'Markup language for creating web pages.' },
        { name: 'CSS', icon: '/icons/css.svg', info: 'Style sheet language for designing web pages.' },
        { name: 'JavaScript', icon: 'icons/js.svg', info: 'Programming language for dynamic web content.' },
        { name: 'React', icon: '/icons/react.svg', info: 'JavaScript library for building user interfaces.' },
        { name: 'Figma', icon: '/icons/icons8-figma.svg', info: 'A collaborative design tool for creating interfaces and prototypes in real-time.' },
    ],
    backEnd: [
        { name: 'Node.js', icon: '/icons/node.svg', info: 'JavaScript runtime built on Chrome\'s V8 engine.' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg', info: 'NoSQL database for handling large-scale data.' },
        { name: 'Java', icon: '/icons/java.svg', info: 'Java is a versatile, object-oriented programming language.' },
    ],
    others: [
        { name: 'GitHub', icon: '/icons/github.svg', info: 'Platform for hosting and collaborating on Git repositories.' },
        { name: 'VS Code', icon: '/icons/icons8-vs-code.svg', info: 'A lightweight yet powerful code editor by Microsoft with built-in support for multiple languages.' },
    ]
};


const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>My Skills</h2>

            {/* Front End Section */}
            <div className="skill-category">
                <h3>Front End</h3>
                <ul className="skills-list">
                    {skills.frontEnd.map((skill, index) => (
                        <li key={index} className="skill-item">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            <span className="skill-name">{skill.name}</span>
                            <div className="tooltip">{skill.info}</div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Back End Section */}
            <div className="skill-category">
                <h3>Back End</h3>
                <ul className="skills-list">
                    {skills.backEnd.map((skill, index) => (
                        <li key={index} className="skill-item">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            <span className="skill-name">{skill.name}</span>
                            <div className="tooltip">{skill.info}</div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Others Section */}
            <div className="skill-category">
                <h3>Others</h3>
                <ul className="skills-list">
                    {skills.others.map((skill, index) => (
                        <li key={index} className="skill-item">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            <span className="skill-name">{skill.name}</span>
                            <div className="tooltip">{skill.info}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
