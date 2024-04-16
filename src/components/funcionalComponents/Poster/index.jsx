

import React from 'react';
import './styles.css';  

function Poster({ imageUrl, title, linkTo }) {
  return (
    <div className="poster">
  <a href={linkTo}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        </a>
    </div>
  );
}

export default Poster;
