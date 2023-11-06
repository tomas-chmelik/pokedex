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

    const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
    };
  
    return (
      <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        <ul className="pokemon-stats">
        <li><b>Type(s)</b>: {pokemon.types.map((t) => capitalizeFirstLetter(t.type.name)).join(', ')}</li>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}><b>
              {capitalizeFirstLetter(stat.stat.name.replace('-', ' '))}</b>: {stat.base_stat}
            </li>
          ))}
        <li><b>Height</b>: {pokemon.height / 10} m</li>
        <li><b>Weight</b>: {pokemon.weight} kg</li>
        </ul>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
    );
  };
  

export default PokemonModal;
