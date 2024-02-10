
const [pokemonData,setPokemonData] =useState([])
import { getAllPokemon , getPokemon } from '../../../pokemon/api/pokemon';

const loadPokemon = async (data) =>{
    let _pokemonData = await Promise.all(
       data.map((pokemon) => {
          let pokemonRecord = getPokemon(pokemon.url);
          return pokemonRecord;
       })
    )
    return _pokemonData
  };