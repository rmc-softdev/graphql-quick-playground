import React from "react";
import PropTypes from "prop-types";

import "./LoadingSpinner.css";

const LoadingSpinner = ({ asOverlay }) => {
  return (
    <div className={`${asOverlay && "loading-spinner__overlay"}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  asOverlay: PropTypes.bool,
};

export default LoadingSpinner;
