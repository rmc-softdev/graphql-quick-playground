import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const PokeDex = (props) => {
  const caughtPokemons = useSelector((state) => state.caughtPokemons);
  const dispatch = useDispatch();

  const deleteHandler = (poke) => {
    dispatch({
      type: "DELETE_POKE",
      payload: poke,
    });
  };

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
        {caughtPokemons?.length !== 0 ? (
          <ul style={{ padding: 0 }}>
            {caughtPokemons.map((poke) => (
              <li key={poke?.id}>
                <div className="results-items">
                  <div className="result content">
                    <div style={{ position: "relative" }}>
                      <span
                        className="pokemon__delete-btn"
                        onClick={() => deleteHandler(poke)}
                      >
                        {" "}
                        x{" "}
                      </span>
                      <Link
                        to={`/pokemon/${poke?.name?.toLowerCase()}`}
                        onClick={props.closeModalHandler}
                      >
                        {" "}
                        <img src={poke?.image} alt="" />{" "}
                      </Link>
                    </div>
                    <span className="resultsName">{poke?.name}</span>
                  </div>
                  <div className="results media">{poke?.number}</div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ padding: "10px", margin: "10px 0" }}>
            {" "}
            You have no pokemons. Maybe catch one?
          </div>
        )}
      </div>
    </>
  );
};

export default PokeDex;
