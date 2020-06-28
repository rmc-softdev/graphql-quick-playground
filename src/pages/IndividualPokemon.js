import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import { INDIVIDUALPOKEMON_QUERY } from "../graphql/get-pokemons";
import Modal from "../shared/components/Modal";
import PokeDex from "../shared/PokeDex";

import "./IndividualPokemon.css";

const IndividualPokemon = (props) => {
  const params = useParams();
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const pokekmons = useSelector((state) => state.caughtPokemons);
  const dispatch = useDispatch();

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

  const handlePokemons = () => {
    if (text === number) {
      let shouldUpdate = true;
      // caughtPokemons.forEach((el) => {
      //   if (el.number === text) {
      //     shouldUpdate = false;
      //   }
      // });
      if (shouldUpdate) {
        setText("");
        dispatch({
          type: "ADD_POKE",
          payload: pokemon,
        });
        props.handlePokemons(pokemon);
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

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
              className="place-item__Modal"
              onClick={openModalHandler}
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
                onClick={openModalHandler}
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
                show={showModal}
                onCancel={closeModalHandler}
                header={`So you want to catch a ${name}...`}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={
                  <span
                    onClick={closeModalHandler}
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
                    onSubmit={submitHandler}
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
                          padding: "8px",
                          color: "var(--primary-color)",
                          fontWeight: "700",
                          border: "1px solid #cacaca",
                        }}
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                      />
                    </div>

                    <div>
                      {handlePokemons()}
                      <div>
                        {props?.caughtPokemons?.map((el, index) => {
                          if (index === props?.caughtPokemons.length - 1) {
                            return (
                              <>
                                <h3 style={{ textAlign: "center" }}>
                                  {" "}
                                  Congratulations! You just caught an awesome{" "}
                                  {el.name}!
                                </h3>
                                <div className="caughtPokemon">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-around",
                                    }}
                                  >
                                    {" "}
                                    <h4
                                      style={{
                                        color: `var(--${types[0].toLowerCase()}`,
                                        fontSize: "20px",
                                      }}
                                    >
                                      {" "}
                                      {el.name}{" "}
                                    </h4>{" "}
                                    <span
                                      style={{
                                        color: `var(--${types[0].toLowerCase()}`,
                                        padding: "5px",
                                      }}
                                    >
                                      {" "}
                                      #{el.number}{" "}
                                    </span>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img
                                      src={el.image}
                                      style={{ width: "250px" }}
                                      alt={el.name}
                                    />
                                  </div>
                                </div>
                              </>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </form>
                  <PokeDex caughtPokemons={props?.caughtPokemons} />
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
              marginBottom: "200px",
            }}
          >
            <div className="pokemon__image">
              <img src={image} alt={name} />
              <div className="pokemon__name">
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: 700,
                    borderBottom: `4px solid var(--${types[0].toLowerCase()})`,
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
                  {attacks.special.map((el, index) => (
                    <li
                      style={{
                        width: "auto",
                        padding: "5px 10px",
                        color: "#fff",
                      }}
                      key={el.name + index}
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
                      {types.map((el, index) => (
                        <li
                          style={{
                            margin: "0 5px",
                            backgroundColor: `var(--${el.toLowerCase()})`,
                          }}
                          key={el + index}
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
                      {resistant.map((el, index) => (
                        <li
                          style={{
                            backgroundColor: `var(--${el.toLowerCase()})`,
                          }}
                          key={el + index}
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
                      {weaknesses.map((el, index) => (
                        <li
                          style={{
                            backgroundColor: `var(--${el.toLowerCase()})`,
                          }}
                          key={el + index}
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
          <div>jesus</div>
        </div>
      )}
    </>
  );
};

export default IndividualPokemon;
