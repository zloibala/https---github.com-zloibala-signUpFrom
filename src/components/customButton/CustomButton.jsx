import "./customButton.style.jsx";
import React from "react";

const CustomButton = ({ text, lenght }) => {
  return (
    <button>
      {text} {lenght}
    </button>
  );
};

export default CustomButton;
