import React from "react";
import personImage from "../assets/person.jpg";
import CustomButton from "../components/CustomButton";

const Connect = () => {
  return (
    <div className="px-12 xl:px-0 h-screen w-full flex flex-col justify-center lg:items-start items-center lg:space-y-14 space-y-7">
      <p className="lg:text-3xl text-2xl uppercase">Connect with farm hub</p>

      <div className="flex flex-col lg:flex-row lg:px-10 items-center lg:gap-32 gap-6">
        <p className="lg:text-xl flex-1 text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur. Vel vel enim malesuada
          volutpat eros senectus sagittis vel quis. Dictumst mollis ante et
          facilisis vitae. Nisl id feugiat at consectetur sed luctus urna.
        </p>

        <div className="flex flex-col space-y-2">
          <CustomButton title={"Twitter"} customStyle={"bg-[#1DA1F2]"} />
          <CustomButton title={"Youtube"} customStyle={"bg-[#C4302B]"} />
          <CustomButton title={"Instagram"} customStyle={"bg-[#F17503]"} />
        </div>
      </div>

      <CustomButton title={"Contact us"} />
    </div>
  );
};

export default Connect;
