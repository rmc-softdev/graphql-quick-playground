import React from "react";

import "./Pokemon.css";

export const PokemonCard = ({
  pokemon: { name, maxHP, maxCP, attacks, image, number },
}) => {
  return (
    <div className="pokemon">
      <div className="pokemon__image">
        <img src={image} alt={name} />
      </div>
      <div className="pokemon__name">
        <p>{name}</p>
      </div>
      <div className="pokemon__meta">
        <p>{number}</p>
      </div>
    </div>
  );
};
