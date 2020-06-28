import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PokeDex = (props) => {
  const renderContent = () => {
    return props.caughtPokemons.map((poke) => (
      <Link to={`/pokemon/${poke.name.toLowerCase()}`}>
        <li key={poke.id}>
          <div className="results-items">
            <div className="result content">
              <div style={{ position: "relative" }}>
                <span className="pokemon__delete-btn" onClick>
                  {" "}
                  x{" "}
                </span>
                <img src={poke.image} alt="" />
              </div>
              <span className="resultsName">{poke.name}</span>
            </div>
            <div className="results media">{poke.number}</div>
          </div>
        </li>
      </Link>
    ));
  };

  const deleteHandler = () => {};

  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: "10px 0",
          fontWeight: 700,
          marginTop: "30px",
        }}
      >
        {" "}
        My Pokemons{" "}
      </div>
      <div
        className="results showcase"
        style={{ margin: "0 auto", boxShadow: "none" }}
      >
        {props.caughtPokemons && props.caughtPokemons.length !== 0 ? (
          <ul style={{ padding: 0 }}>{renderContent()}</ul>
        ) : (
          <div style={{ padding: "10px", margin: "10px 0" }}>
            {" "}
            No pokemons were found. Maybe catch one?
          </div>
        )}
      </div>
    </>
  );
};

export default PokeDex;
