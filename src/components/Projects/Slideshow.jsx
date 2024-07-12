import React, { useState } from 'react';
import tree from './images/DSC_0170.jpg';
import wallenrun from './images/DSC_0192.jpg';
import wallen from './images/DSC00025.jpg';
import subi from './images/DSC00010.jpg';
import './slideshow.css'
const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const images = [tree,wallen,wallenrun,subi]
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const toggleEnlarged = () => {
    setIsEnlarged((prevIsEnlarged) => !prevIsEnlarged);
  };

  return (
    <div className="slideshow">
      <button onClick={goToPrevSlide}>&lt;</button>
      <img className={isEnlarged ? 'slide-img enlarged' : 'slide-img'}
        onClick={toggleEnlarged} src={images[currentIndex]} alt="Slideshow Image" />
      <button onClick={goToNextSlide}>&gt;</button>
    </div>
  );
};

export default Slideshow;
