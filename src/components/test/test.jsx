import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const images = [
    'https://hips.hearstapps.com/hmg-prod/images/pillars-of-creation-visible-and-midi-1666987280.png',
    'https://i.guim.co.uk/img/media/b716c953348f164cd6015d7dc80829a0e3106bdd/0_0_4537_4630/master/4537.jpg?width=980&quality=85&s=a4059a9eaa127a2babfd829536ac0f1e',
    'https://hips.hearstapps.com/hmg-prod/images/pillars-of-creation-visible-and-midi-1666987280.png',
    // Add more image URLs here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={handlePrev}>
        Prev
      </button>
      <div className="image-stack">
        {images.map((image, index) => (
          <img
            className={`image ${index === currentIndex ? 'active' : ''}`}
            src={image}
            alt={`Image ${index}`}
            key={index}
          />
        ))}
      </div>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
    
  );
};

export default Carousel;
