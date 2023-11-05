const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = (limit = 21, offset = 0) => {
  return fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json());
};

export const getPokemonDetails = (name) => {
  return fetch(`${BASE_URL}/pokemon/${name}`)
    .then(response => response.json());
};
