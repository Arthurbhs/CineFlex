import React, { useState } from 'react';
import Cineflex from '../../funcionalComponents/Cineflex'
import './styles.css'
import Menu from '../../funcionalComponents/Menu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header"> 
    <div className='menu'>
    <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
    
    <div className='logo'>
      <Cineflex/>
      </div>
      
    </div>
  );
}

export default Header;
