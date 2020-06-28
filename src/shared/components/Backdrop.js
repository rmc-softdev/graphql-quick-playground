import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./Backdrop.css";

const Backdrop = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClick}></div>,
    document.getElementById("backdrop-hook")
  );
};

Backdrop.propTypes = {
  onClick: PropTypes.func,
};

export default Backdrop;
