import React from "react";
import personImage from "../assets/person.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Testimonials = () => {
  return (
    <div className="px-12 xl:px-0 h-screen w-full flex flex-col justify-center lg:items-start items-center lg:space-y-14 space-y-7">
      <p className="lg:text-3xl text-2xl uppercase">
        What are people saying about the hub?
      </p>

      <div className="flex flex-col-reverse lg:flex-row lg:px-28 items-center lg:gap-32 gap-6">
        <p className="lg:text-xl flex-1 text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur. Vel vel enim malesuada
          volutpat eros senectus sagittis vel quis. Dictumst mollis ante et
          facilisis vitae. Nisl id feugiat at consectetur sed luctus urna.
        </p>

        <img
          src={personImage}
          className="border-2 lg:h-64 h-52 lg:w-64 w-52 border-secondary rounded-full hover:scale-105 object-cover"
        />

        <ArrowRightAltIcon fontSize="large" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Testimonials;
