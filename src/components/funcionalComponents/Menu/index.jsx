import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importe os ícones de menu hamburguer e "X" da biblioteca React Icons
import './styles.css'; // Importe o arquivo de estilo CSS

function Menu({ isOpen, toggleMenu }) {
  const handleMenuClick = () => {
    toggleMenu(!isOpen); // Inverta o estado isOpen quando o menu é clicado
  };

  return (
    <div className="menu-container">
      {isOpen && <div className="overlay" onClick={handleMenuClick} />}
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={handleMenuClick}>
        <span className="icon">
          {isOpen ? <FiX size={32} style={{ color: 'brown' }} /> : <FiMenu size={32} />} {/* Use o ícone de menu hamburguer se o menu estiver fechado, senão use o ícone "X" */}
        </span>
      </div>
      {isOpen && (
        <div className="modal">
          <ul>
            <h3>Home</h3>
            <li>Pagina principal</li>
            <h3>Categorias</h3>
            <li>animes</li>
            <li>filmes</li>
            <li>series</li>
            {/* Adicione mais categorias conforme necessário */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
