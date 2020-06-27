import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { POKEMONS_QUERY } from "../graphql/get-pokemons";
import { PokemonCard } from "../components/PokemonCard";
import PokeSearch from "../components/search mechanism/PokeSearch";

import "./PokemonsContainer.css";

export const PokemonsShowCase = () => {
  //just doing some good ol' destructuring
  const { data: { pokemons = [] } = {} } = useQuery(POKEMONS_QUERY, {
    variables: { first: 151 },
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
