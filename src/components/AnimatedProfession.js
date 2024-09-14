import React, { useEffect, useState } from 'react';

const professions = ['a Full Stack Developer', 'a Graphic Designer', 'a Software Engineer', ''];

const AnimatedProfession = () => {
    const [currentProfession, setCurrentProfession] = useState(professions[0]);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                // Typing effect
                if (charIndex < currentProfession.length) {
                    setDisplayText((prev) => prev + currentProfession[charIndex]);
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
                }
            } else {
                // Backspace effect
                if (charIndex > 0) {
                    setDisplayText((prev) => prev.slice(0, -1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % professions.length);
                    setCurrentProfession(professions[(index + 1) % professions.length]);
                }
            }
        };

        const typingSpeed = isDeleting ? 50 : 100; // Speed of typing and deleting
        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, currentProfession, index]);

    return (
        <span style={{ color: '#124e66' }}>{displayText}</span>  // Set the desired color here
    );
};


export default AnimatedProfession;
