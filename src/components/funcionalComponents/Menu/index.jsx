// BurgerMenu.js

import React from 'react';
import './styles.css'; // Importe o arquivo de estilo CSS

function Menu({ isOpen, toggleMenu }) {
  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}

export default Menu;
