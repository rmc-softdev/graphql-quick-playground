import React from "react";
import {
  render,
  fireEvent,
  queryByPlaceholderText,
} from "@testing-library/react";
import PokeSearch from "../components/search mechanism/PokeSearch";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PokeDex from "../shared/PokeDex";
import { PokemonsShowCase } from "../pages/PokemonsShowCase";

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

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh",
});

it("renders correctly", () => {
  const { queryByTestId } = render(<PokeSearch pokemons={mockPokemons} />);

  expect(queryByTestId("search-container")).toBeTruthy();
  expect(queryByTestId("search-input")).toBeTruthy();
});

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByTestId, queryByLabelText } = render(
      <ApolloProvider client={client}>
        <PokemonsShowCase>
          <PokeSearch pokemons={mockPokemons} />
        </PokemonsShowCase>
      </ApolloProvider>
    );
    const searchInput = queryByLabelText("search-input");
    // fireEvent.change(searchInput, {target: { value: "001" }});
    // expect(searchInput.value).toBe("001");
  });
});

describe("Search functionalities", () => {
  describe("with invalid query", () => {
    it("doesn't trigger request search functionality", () => {
      // const requestSearch = jest.fn();
      const { queryByTestId } = render(<PokeSearch pokemons={mockPokemons} />);
      const searchInput = queryByTestId("search-input");
    });
  });
});
