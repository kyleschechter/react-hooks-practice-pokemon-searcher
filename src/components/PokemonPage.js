import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  const url = "http://localhost:3001/pokemon"

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(data => setPokemon(data))
  }, [])

  const allPokemon = pokemon.filter(poke => {
    return poke.name.toLowerCase().includes(search)
  })

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (newP) => {

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newP.name,
        hp: parseInt(newP.hp),
        sprites: {
          front: newP.frontUrl,
          back: newP.backUrl
        }
      })
    }

    fetch(url, configObj)
    .then(r => r.json())
    .then(data => setPokemon([...pokemon, data]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onPokemonSubmit={handleSubmit}/>
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={allPokemon}/>
    </Container>
  );
}

export default PokemonPage;
