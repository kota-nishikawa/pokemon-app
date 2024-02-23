import { getAllPokemon, getPokemon } from '../api/pokemon';
import { useState ,useCallback } from 'react';

export const usePokemonData = () => {
   const [pokemonData, setPokemonData] = useState<any[]>([]);

   const loadPokemon = useCallback(async (data: any) => {

    let _pokemonData = await Promise.all(
       data.map((pokemon :any) => {
          let pokemonRecord = getPokemon(pokemon.url);
          return pokemonRecord;
       })
    )
    setPokemonData(_pokemonData);

   },[]);
   return { pokemonData, loadPokemon };
}