import React from "react";

const GetPokemonForm = () => {
  return (
    <>
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
            {caughtPokemons.map((el, index) => {
              if (index === caughtPokemons.length - 1) {
                return (
                  <>
                    <h3 style={{ textAlign: "center" }}>
                      {" "}
                      Congratulations! You just caught an awesome {el.name}!
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
                      <div>
                        {" "}
                        <img src={el.image} alt="" />{" "}
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      </form>
    </>
  );
};

export default GetPokemonForm;
