import { notifySuccess } from "../toaster/toaster";
import { pokemonData } from "../typescript/types";

const useMyPokemon = () => {
  const savePokemonToLocalStorage = (name: string, url: string) => {
    const existingCaughtPokemon = JSON.parse(localStorage.getItem('caughtPokemon') || '[]');
    existingCaughtPokemon.push({ name, url });
    localStorage.setItem('caughtPokemon', JSON.stringify(existingCaughtPokemon));
    notifySuccess(`${name} has been caught!`);
  };

  const removePokemonFromLocalStorage = (name: string) => {
    let existingCaughtPokemon = JSON.parse(localStorage.getItem('caughtPokemon') || '[]');
    existingCaughtPokemon = existingCaughtPokemon.filter((pokemon: pokemonData) => pokemon.name !== name);
    localStorage.setItem('caughtPokemon', JSON.stringify(existingCaughtPokemon));
    notifySuccess(`${name} has been released!`);
  };

  const isPokemonCaught = (name: string) => {
    const existingCaughtPokemon = JSON.parse(localStorage.getItem('caughtPokemon') || '[]');
    return existingCaughtPokemon.some((pokemon: pokemonData) => pokemon.name === name);
  };
  
  return { savePokemonToLocalStorage, removePokemonFromLocalStorage, isPokemonCaught };
};

export default useMyPokemon;
