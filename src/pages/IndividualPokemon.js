import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { INDIVIDUALPOKEMON_QUERY } from "../graphql/get-pokemons";
import Modal from "../shared/components/Modal";
import { motion } from "framer-motion";

import "./IndividualPokemon.css";

const IndividualPokemon = () => {
  const params = useParams();
  const { data: { pokemon = {} } = {} } = useQuery(INDIVIDUALPOKEMON_QUERY, {
    variables: { name: `${params.name && params.name}` },
  });
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

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
            flexDirection: "column",
            cursor: "auto",
          }}
        >
          <h3>
            <span
              className="place-item__map"
              onClick={openMapHandler}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                style={{
                  width: "max-content",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                {" "}
                Try to catch this poke
              </span>
              <motion.div
                onClick={openMapHandler}
                style={{ cursor: "pointer" }}
                initial={{
                  rotate: 0,
                }}
                animate={{
                  scale: [1, 1.03, 1, 1.03, 1, 1.03, 1, 1.03, 1, 1.03, 1],
                  rotate: [0, 10, -10, 10, -10, 10, -10, 10, -10, 0],
                  transition: {
                    rotate: {
                      duration: 3,
                      ease: "easeInOut",
                      yoyo: Infinity,
                      repeatDelay: 1,
                    },
                    scale: {
                      duration: 1.4,
                      ease: "easeInOut",
                      yoyo: Infinity,
                      repeatDelay: 0.3,
                    },
                  },
                }}
              >
                <img
                  src="https://i.ibb.co/jVR7zqK/Pin-Clipart-com-cyclone-clip-art-622272.png"
                  alt=""
                  style={{ height: "32px" }}
                />
              </motion.div>
            </span>
            <span>
              <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={`So you want to catch a ${name}...`}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={
                  <span
                    onClick={closeMapHandler}
                    style={{
                      cursor: "pointer",
                      backgroundColor: "rebeccapurple",
                      padding: "5px",
                      color: "#fff",
                    }}
                  >
                    CLOSE
                  </span>
                }
              >
                <div className="pokemons__form">
                  <form
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label htmlFor="name" style={{ marginBottom: "5px" }}>
                      {" "}
                      Then you must really know him! What's his ID?
                    </label>
                    <div>
                      <span
                        style={{
                          fontSize: "13px",
                          textAlign: "center",
                          color: `var(--primary-color)`,
                          marginRight: "5px ",
                        }}
                      >
                        e.g., 007
                      </span>
                      <input
                        type="text"
                        id="name"
                        placeholder={`Type ${name}'s ID here...`}
                        style={{
                          width: "180px",
                          padding: "6px",
                          color: "var(--primary-color)",
                          fontWeight: "700",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </Modal>
            </span>
          </h3>
          <div
            className="pokemon"
            style={{
              width: "450px",
              borderRadius: "10px",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "auto",
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
                    <h3>{types?.length !== 1 ? "Types" : "Type"} </h3>
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
