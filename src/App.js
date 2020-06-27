import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsShowCase } from "./pages/PokemonsShowCase";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import "./App.css";
import IndividualPokemon from "./pages/IndividualPokemon";

const App = () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh",
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <Route path="/" exact component={PokemonsShowCase} />
          <Route path="/pokemon/:name" component={IndividualPokemon} />
        </main>
      </Router>
    </ApolloProvider>
  );
};

export default App;
