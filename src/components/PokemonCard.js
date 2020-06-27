import React from "react";
import { Link } from "react-router-dom";

import "./Pokemon.css";

export const PokemonCard = ({ pokemon: { name, image, number, types } }) => {
  return (
    <Link to={`/pokemon/${name.toLowerCase()}`}>
      <div className="pokemon">
        <div className="pokemon__image">
          <img src={image} alt={name} />
        </div>
        <div className="pokemon__name">
          <h3 style={{ margin: "0 15px" }}>{name}</h3>
        </div>
        <div className="pokemon__meta">
          <p style={{ margin: "0 15px" }}>#{number}</p>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0 35px",
            }}
          >
            {types?.map((el) => (
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
        </div>
      </div>
    </Link>
  );
};
