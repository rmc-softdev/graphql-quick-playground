import React from "react";
import { render } from "@testing-library/react";
import PokeDex from "../shared/PokeDex";
import { Provider } from "react-redux";
import store from "../store";

const mockPokemons = [
  {
    id: "UG9rZW1vbjowMDE=",
    name: "Bulbasaur",
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    number: "001",
    types: ["Grass", "Poison"],
    __typename: "Pokemon",
  },
];

it("should renders an array of pokemons objects", () => {
  // const mockAddPoke = jest.fn()
  // const mockDeletePoke = jest.fn()
  const RenderedPokes = render(
    <Provider store={store}>
      <PokeDex />
    </Provider>
  );
  expect(RenderedPokes).toMatchSnapshot();
});
