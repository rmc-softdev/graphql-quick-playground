import React from "react";
import { render } from "@testing-library/react";
import PokeDex from "../shared/PokeDex";
import { Provider } from "react-redux";
import store from "../store";

/* Nota do desenvolvedor:
A aplicação de testes foi limitada a testes de existência. Isso se deu porque a interação entre múltiplas tecnologias (Redux e Apollo) principalmente cria uma camada extra de dificuldade na implementação de testes de funcionalidade mais complexos, que simulem a interação do usuário em si. A resolução desses problemas requer tempo, paciência e leitura cautelosa da documentação oficial, o que não é apropriado para um projeto de curto prazo, portanto, deixei apenas algumas tentativas e simulações de potenciais testes como uma mera ilustração em alguns pontos. Em outros, algumas implementações básicas são realizadas com sucesso.

*/

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
