import { useEffect, useState } from 'react';
import { getAllPokemon } from './utils/pokemon.js';
import './App.css';
import { Card } from './components/Card/Card.js';
import { Navbar } from './components/Navbar/Navbar.js';

import { usePokemonData } from './features/Card/hooks';

function App() {
  const initialURL="https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading]=useState(true);
  const [nextURL,setNextURL]=useState("")
  const [prevURL,setPrevURL]=useState("")
  const { pokemonData, loadPokemon } = usePokemonData()

  useEffect(()=>{
    const fetchPokemonData=async()=>{
      //全てのポケモンデータを取得
      let res =  await getAllPokemon(initialURL);
      loadPokemon(res.results)
      setNextURL(res.next)
      setPrevURL(res.previous)
      setLoading(false)
    };
    fetchPokemonData();
  },[loadPokemon]);


  const handleNextPage = async ()=>{
    setLoading(true)
    let data = await getAllPokemon(nextURL)
    await loadPokemon(data.results)
    setNextURL(data.next)
    setPrevURL(data.previous)
    setLoading(false)
  }
  const handlePrevPage = async ()=>{
    if(!prevURL) return
    setLoading(true)
    let data = await getAllPokemon(prevURL)
    await loadPokemon(data.results)
    setNextURL(data.next)
    setPrevURL(data.previous)
    setLoading(false)
  }

  console.log(pokemonData)

  return (
    <>
    <Navbar />
    <div className="App">
      {loading ? (
        <h1>ローディング中
        </h1>
      ) :
        <>
        <div className="pokemonCardContainer" >
          {pokemonData.map(( pokemon,i ) => {
            return <Card key={i} pokemon={pokemon}/>
          })}

        </div>
        <div className="btn">
        <button onClick={handlePrevPage}>前へ</button>
        <button onClick={handleNextPage}>次へ</button>
        </div>

        </>
      }
    </div>
    </>
  );

}

export default App;
