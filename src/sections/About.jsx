import React from "react";
import aboutTheHubImage from "../assets/about us.png";
import CustomButton from "../components/CustomButton";

const About = ({ signUp }) => {
  return (
    <div className="px-12 xl:px-0 h-screen w-full flex flex-col justify-center lg:items-start items-center lg:space-y-14 space-y-7">
      <p className="lg:text-3xl text-2xl uppercase">Produce at the hub</p>

      <div className="flex flex-col-reverse lg:flex-row lg:px-10 items-center lg:gap-32 gap-6">
        <p className="lg:text-xl flex-1 text-center lg:text-left">
          Farm Hub is a digital platform that provides information on produce
          currently being sold and the services which we offer. Our goal is to
          eradicate the need for middle-men when you want to get your farm
          produce. All can be done from the comfort of your homes.
        </p>

        <img
          src={aboutTheHubImage}
          className="flex-1 border-2 lg:w-96 w-72 border-secondary rounded-md hover:scale-105"
        />
      </div>

      <CustomButton title={"Read more"} handleClick={signUp} />
    </div>
  );
};

export default About;
