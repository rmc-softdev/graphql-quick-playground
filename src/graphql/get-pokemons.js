import gql from "graphql-tag";

export const POKEMONS_QUERY = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      number
      types
    }
  }
`;

export const INDIVIDUALPOKEMON_QUERY = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      name
      image
      number
      types
      resistant
      weaknesses
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;
