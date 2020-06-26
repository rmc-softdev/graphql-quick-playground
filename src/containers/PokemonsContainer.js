import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { PokemonCard } from "../components/PokemonCard";
import PokeSearch from "../components/search mechanism/PokeSearch";

import "./PokemonsContainer.css";

export const PokemonsContainer = () => {
  //just doing some good ol' destructuring
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 100 },
  });

  return (
    <>
      <PokeSearch pokemons={pokemons} />
      <div className="pokemons__list">
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </>
  );
};
