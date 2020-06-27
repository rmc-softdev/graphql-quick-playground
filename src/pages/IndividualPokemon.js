import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { INDIVIDUALPOKEMON_QUERY } from "../graphql/get-pokemons";

import "./IndividualPokemon.css";

const IndividualPokemon = () => {
  const params = useParams();
  const { data: { pokemon = {} } = {} } = useQuery(INDIVIDUALPOKEMON_QUERY, {
    variables: { name: `${params.name && params.name}` },
  });

  const {
    image,
    name,
    id,
    attacks,
    maxCP,
    maxHP,
    number,
    types,
    resistant,
    weaknesses,
  } = pokemon;
  console.log(attacks?.special);

  return (
    <>
      {pokemon.name && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            className="pokemon"
            style={{
              width: "450px",
              borderRadius: "10px",
              height: "750px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="pokemon__image">
              <img src={image} alt={name} />
              <div className="pokemon__name">
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: 700,
                    borderBottom: "2px solid rebeccapurple",
                    margin: 0,
                    paddingBottom: "15px",
                  }}
                >
                  {name}
                </p>
              </div>
            </div>

            <div
              className="pokemon__meta"
              style={{ width: "100%", height: "100%" }}
            >
              <h3> Special Attacks </h3>
              {attacks.special && (
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "0 35px",
                  }}
                >
                  {attacks.special.map((el) => (
                    <li
                      style={{
                        width: "auto",
                        padding: "5px 10px",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      {el.name}{" "}
                    </li>
                  ))}
                </ul>
              )}
              <div className="pokemon__meta__types">
                {pokemon.types && (
                  <div>
                    {" "}
                    <h3>Types</h3>
                    <ul
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "0 35px",
                      }}
                    >
                      {types.map((el) => (
                        <li
                          style={{
                            margin: "0 5px",
                            backgroundColor: `var(--${el.toLowerCase()})`,
                          }}
                        >
                          {" "}
                          {el}{" "}
                        </li>
                      ))}{" "}
                    </ul>
                    <h3>Strong against</h3>
                    <ul
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "0 35px",
                      }}
                    >
                      {resistant.map((el) => (
                        <li
                          style={{
                            backgroundColor: `var(--${el.toLowerCase()})`,
                          }}
                        >
                          {" "}
                          {el}{" "}
                        </li>
                      ))}{" "}
                    </ul>
                    <h3>Weak against</h3>
                    <ul
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "0 35px",
                      }}
                    >
                      {weaknesses.map((el) => (
                        <li
                          style={{
                            backgroundColor: `var(--${el.toLowerCase()})`,
                          }}
                        >
                          {" "}
                          {el}{" "}
                        </li>
                      ))}{" "}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualPokemon;
