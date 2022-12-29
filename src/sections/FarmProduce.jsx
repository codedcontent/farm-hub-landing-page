import React from "react";
import hubProduceImage from "../assets/hub-produce.png";
import CustomButton from "../components/CustomButton";

const FarmProduce = ({ signUp }) => {
  return (
    <div className="px-12 xl:px-0 h-screen w-full flex flex-col justify-center lg:items-start items-center lg:space-y-14 space-y-7">
      <p className="lg:text-3xl text-2xl uppercase">Produce at the hub</p>

      <div className="flex flex-col-reverse lg:flex-row lg:px-10 items-center lg:gap-32 gap-6">
        <p className="lg:text-xl flex-1 text-center lg:text-left">
          At Farm Hub we have a variety of produce that are grown in-house and
          organically, they include crops, fruits, and vegetables like apples,
          corn, tomatoes, lettuce, carrots, potatoes, peas, beans, and
          strawberries. We also grow grains such as wheat, rice, and oats, as
          well as livestock products such as meat, dairy, and eggs. Together
          with herbs, flowers, and other specialty crops for specific markets.
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
