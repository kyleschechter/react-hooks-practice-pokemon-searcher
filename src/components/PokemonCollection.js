import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ onDeleteClick, pokemon }) {

const listOfPokemon = pokemon.map(poke => (
  <PokemonCard 
  key={poke.id}
  id={poke.id}
  name={poke.name}
  onDeleteClick={onDeleteClick}
  hp={poke.hp}
  spriteFront={poke.sprites.front}
  spriteBack={poke.sprites.back}
  />
))

  return (
    <Card.Group itemsPerRow={6}>
      {listOfPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
