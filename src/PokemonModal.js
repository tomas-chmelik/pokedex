import {React, useEffect } from 'react';
import './css/PokemonModal.css';

const PokemonModal = ({ pokemon, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => document.removeEventListener('keydown', handleKeyDown);
      }, [onClose]);

    if (!pokemon) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
          <p>Type: {pokemon.types.map(t => t.type.name).join(', ')}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  

export default PokemonModal;
