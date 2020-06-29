import React, { useState } from "react";
import "./SearchedPoke.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SearchedPokes = ({ searchedContent }) => {
  // let reducedContent = searchedContent.slice(0, 5);

  const renderContent = () => {
    return searchedContent.slice(0, 10).map((poke) => (
      <Link to={`/pokemon/${poke.name.toLowerCase()}`}>
        <li key={poke.id}>
          <div className="results-items">
            <AnimatePresence>
              <motion.div
                className="result content"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 2,
                    ease: "easeOut",
                  },
                }}
                exit={{ opacity: 0 }}
              >
                <img src={poke.image} alt="" />
                <span className="resultsName">{poke.name}</span>
              </motion.div>
            </AnimatePresence>
            <div className="results media">{poke.number}</div>
          </div>
        </li>
      </Link>
    ));
  };

  return (
    <>
      <div className="results">
        <AnimatePresence>
          <motion.div
            className={`results-container`}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
          >
            <div className="results title">
              <span> Search Results </span>
              {/*  <button
              onClick={() => {
                setStatus(!status);
              }}
            >
              {status ? "Hide" : ""}
            </button>*/}
            </div>
            <div className="results type">
              <span> Pokemons </span>
            </div>
            <div className="results showcase">
              {searchedContent.length !== 0 ? (
                <ul style={{ padding: 0 }}>{renderContent()}</ul>
              ) : (
                <div style={{ padding: "10px" }}>
                  {" "}
                  No results were found within the Kanto Era database.
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default SearchedPokes;
