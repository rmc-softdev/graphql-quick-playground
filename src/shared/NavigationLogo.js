import React from "react";
import { Link } from "react-router-dom";

const NavigationLogo = () => {
  return (
    <>
      <div className="search slogan">
        <Link to="/">
          <img
            src="https://i.ibb.co/gvWwy41/pokelogo2.png"
            style={{ width: "200px" }}
            alt=""
          />
        </Link>
      </div>
    </>
  );
};

export default NavigationLogo;
