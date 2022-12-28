import React from "react";
import CustomButton from "./CustomButton";

const AppBar = ({ signUp }) => {
  return (
    <div className="fixed top-0 left-0 md:py-5 h-16 bg-gray-100/90 shadow-sm w-full flex items-center justify-between px-8 z-40">
      <p className="md:text-2xl lg:text-3xl text-lg">Farm Hub</p>

      <CustomButton
        title="Sign up"
        handleClick={signUp}
        customStyle={"px-4 py-2 md:px-6 md:py-3"}
      />
    </div>
  );
};

export default AppBar;
