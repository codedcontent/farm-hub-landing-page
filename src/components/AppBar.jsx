import React from "react";
import CustomButton from "./CustomButton";

const AppBar = () => {
  return (
    <div className="fixed top-0 left-0 py-5 bg-gray-300 w-full flex items-center justify-between">
      <p className="text-4xl">Farm Hub</p>

      <CustomButton title="Sign up" />
    </div>
  );
};

export default AppBar;
