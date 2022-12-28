import React from "react";
import hubProduceImage from "../assets/hub-produce.png";
import CustomButton from "../components/CustomButton";

const FarmProduce = ({ signUp }) => {
  return (
    <div className="px-12 xl:px-0 h-screen w-full flex flex-col justify-center lg:items-start items-center lg:space-y-14 space-y-7">
      <p className="lg:text-3xl text-2xl uppercase">Produce at the hub</p>

      <div className="flex flex-col-reverse lg:flex-row lg:px-10 items-center lg:gap-32 gap-6">
        <p className="lg:text-xl flex-1 text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur. Vel vel enim malesuada
          volutpat eros senectus sagittis vel quis. Dictumst mollis ante et
          facilisis vitae. Nisl id feugiat at consectetur sed luctus urna.
        </p>

        <img
          src={hubProduceImage}
          className="flex-1 border-2 lg:w-96 w-72 border-secondary rounded-md hover:scale-105"
        />
      </div>

      <CustomButton title={"Make an order"} handleClick={signUp} />
    </div>
  );
};

export default FarmProduce;
