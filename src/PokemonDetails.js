import { useEffect, useState } from "react";
import { getPokemonDetails } from "./PokeAPIService";

export const PokemonDetails = ({ pokemonName }) => {
    const [details, setDetails] = useState(null);
  
    useEffect(() => {
      if (pokemonName) {
        getPokemonDetails(pokemonName).then(data => setDetails(data));
      }
    }, [pokemonName]);
  
    if (!details) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>{details.name}</h2>
        <img src={details.sprites.other.dream_world.front_default} alt="pokemon.png" height={200} width={200} ></img>
        {/* Render your details here */}
      </div>
    );
  };
  