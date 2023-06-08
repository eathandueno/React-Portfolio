import React, { useEffect, useRef, useState } from 'react';
import './home.css'; // Import the CSS file for the fade-in effect

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
