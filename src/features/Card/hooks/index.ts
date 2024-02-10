import { getAllPokemon, getPokemon } from '../api/pokemon';
import { useState  } from 'react';

const usePokemonData = () => {
   const [pokemonData, setPokemonData] = useState<any[]>([]);

   const loadPokemon = async (data) =>{

    let _pokemonData = await Promise.all(
       data.map((pokemon) => {
          let pokemonRecord = getPokemon(pokemon.url);
          return pokemonRecord;
       })
    )
    setPokemonData(_pokemonData);

  };
  return { pokemonData, loadPokemon };
}