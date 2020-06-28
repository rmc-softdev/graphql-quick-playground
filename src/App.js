import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";

import IndividualPokemon from "./pages/IndividualPokemon";
// import store from "./store";
import { PokemonsShowCase } from "./pages/PokemonsShowCase";
import store from "./store";

import "./App.css";
import NavigationLogo from "./shared/NavigationLogo";

const App = () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh",
  });

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <NavigationLogo />
          <Route path="/" exact component={PokemonsShowCase} />
          <Route path="/pokemon/:name">
            <IndividualPokemon />
          </Route>
        </Router>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
