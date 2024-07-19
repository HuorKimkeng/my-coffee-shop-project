import React from "react";
import "./StyleButton.css";

const StyledButton = ({ children }) => {
  return <button className="styled-button">{children}</button>;
};

export default StyledButton;
