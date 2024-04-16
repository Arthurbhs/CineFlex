// Carousel.js

import React, { useState } from 'react';
import './styles.css'; 

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>‹</button>
      <div className="image-container">
        <img src={images[(currentImageIndex - 1 + images.length) % images.length]} alt={`Previous Slide ${currentImageIndex - 1}`} className="prev-image" />
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
        <img src={images[(currentImageIndex + 1) % images.length]} alt={`Next Slide ${currentImageIndex + 1}`} className="next-image" />
      </div>
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
}

export default Carousel;
