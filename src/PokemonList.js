import React, { useEffect, useState } from 'react';
import { getPokemonDetails, getPokemonList } from './PokeAPIService';
import PokemonModal from './PokemonModal';
import './css/App.css';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 21;
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    getPokemonList(limit, offset).then(async (data) => {
      const promises = data.results.map(async (p) => {
        const details = await getPokemonDetails(p.name);
        return { ...p, image: details.sprites.other.dream_world.front_default, name: capitalizeFirstLetter(p.name)};
      });
      const results = await Promise.all(promises);
      setPokemon(results);
    });
  }, [offset, limit]);

  const handlePokemonClick = (pokemonName) => {
    getPokemonDetails(pokemonName.toLowerCase()).then(data => {
      setSelectedPokemon(data);
      setShowModal(true);
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPokemon(null);
  };

  return (
    <div>
        <div className="buttons-container">
        <button 
            className="button" 
            onClick={() => setOffset(offset - limit)}
            disabled={offset === 0} // Disable the previous button if offset is 0
        >
            &lt;<br/>Previous
        </button>   
        <button 
            className="button" 
            onClick={() => setOffset(offset + limit)}
        >
            &gt;<br/>Next
        </button>
        </div>
        <div className="pokemon-list">
            {pokemon.map(p => (
            <div key={p.name} className="pokemon-card" onClick={() => handlePokemonClick(p.name)}>
                <img src={p.image} alt="pokemon.png"></img>
                <h2>{p.name}</h2>
            </div>
            ))}
        </div>
        {showModal && (
        <PokemonModal 
          pokemon={selectedPokemon} 
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PokemonList;
