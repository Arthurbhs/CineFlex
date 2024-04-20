import React, { useState } from 'react';
import './styles.css'; 

function Carousel({ imagePaths }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % imagePaths.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>‹</button>
      <div className="image-container">
        <img src={imagePaths[(currentImageIndex - 1 + imagePaths.length) % imagePaths.length]} alt={`Previous Slide ${currentImageIndex - 1}`} className="prev-image" />
        <img src={imagePaths[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
        <img src={imagePaths[(currentImageIndex + 1) % imagePaths.length]} alt={`Next Slide ${currentImageIndex + 1}`} className="next-image" />
      </div>
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
}

export default Carousel;
