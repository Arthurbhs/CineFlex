// Header.js

import React from 'react';
import Cineflex from '../../funcionalComponents/Cineflex'
import './styles.css'
import Menu from '../../funcionalComponents/Menu';

function Header() {
  return (
    <div className="header"> 
    <div className='menu'>
    <Menu/>
    </div>
    
    <div className='logo'>
      <Cineflex/>
      </div>
      
    </div>
  );
}

export default Header;
