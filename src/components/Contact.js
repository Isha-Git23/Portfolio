// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <div className="contact-info">
                <p>Feel free to reach out to me through any of the following methods:</p>
                <ul>
                    <li>
                        <strong>Phone:</strong> <a href="tel:9699724866">9699724866</a>
                    </li>
                    <li>
                        <strong>Email:</strong> <a href="mailto:ishakatey@gmail.com">ishakatey@gmail.com</a>
                    </li>
                    <li>
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/isha-katey-938002259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">IshaKatey</a>
                    </li>
                    <li>
                        <strong>GitHub:</strong> <a href="https://github.com/Isha-Git23" target="_blank" rel="noopener noreferrer">Isha-Git23</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Contact;
