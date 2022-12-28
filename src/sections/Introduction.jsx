import React from "react";
import CustomButton from "../components/CustomButton";

const Introduction = ({ signUp }) => {
  return (
    <div className="h-screen w-full lg:space-y-20 gap-7 flex flex-col justify-center items-center px-12 xl:px-0">
      <p className="lg:text-7xl text-4xl text-center">
        The #1 best platform to buy your farm produce directly.
      </p>

      <p className="text-center lg:text-xl mb-7 text-secondary">
        No middle-men. Cheaper Produce, Faster Delivery
      </p>

      <CustomButton title={"Sign up now - It's free"} handleClick={signUp} />
    </div>
  );
};

export default Introduction;
