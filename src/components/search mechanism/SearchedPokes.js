import React, { useState } from "react";
import "./SearchedPoke.css";
import { Link } from "react-router-dom";

const SearchedPokes = ({ searchedContent }) => {
  // let reducedContent = searchedContent.slice(0, 5);

  const renderContent = () => {
    return searchedContent.slice(0, 10).map((poke) => (
      <Link to={`/pokemon/${poke.name.toLowerCase()}`}>
        <li key={poke.id}>
          <div className="results-items">
            <div className="result content">
              <img src={poke.image} alt="" />
              <span className="resultsName">{poke.name}</span>
            </div>
            <div className="results media">{poke.number}</div>
          </div>
        </li>
      </Link>
    ));
  };

  return (
    <>
      <div className="results">
        <div className={`results-container`}>
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
            <span> Pokemons</span>
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
        </div>
      </div>
    </>
  );
};

export default SearchedPokes;
