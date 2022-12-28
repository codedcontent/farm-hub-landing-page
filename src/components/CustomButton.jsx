import React from "react";

const CustomButton = ({ title, handleClick, customStyle }) => {
  return (
    <button
      className={`px-6 py-3 text-sm lg:text-base bg-secondary text-white rounded-md ${
        customStyle && customStyle
      }`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
