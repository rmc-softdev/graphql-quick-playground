import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from "./containers/PokemonsContainer";

import "./App.css";

const App = () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
};

export default App;
