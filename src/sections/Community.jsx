import React from "react";
import communityImage from "../assets/community.jpg";
import CustomButton from "../components/CustomButton";

const Community = ({ signUp }) => {
  return (
    <div className="px-12 xl:px-0 h-screen w-full flex flex-col justify-center lg:items-start items-center lg:space-y-14 space-y-7">
      <p className="lg:text-3xl text-2xl uppercase">The community hub</p>

      <div className="flex flex-col-reverse lg:flex-row lg:px-10 items-center lg:gap-32 gap-6">
        <p className="lg:text-xl flex-1 text-center lg:text-left">
          Farm Hub is a community of like minded people who believe in eating
          more organic meals and a more affordable means of acquiring this
          organic meals. We could love to have on as a member of the community.
        </p>

        <img
          src={communityImage}
          className="flex-1 border-2 lg:w-96 w-72 border-secondary rounded-md hover:scale-105"
        />
      </div>

      <CustomButton
        title={"Be a part of the comminuity"}
        handleClick={signUp}
      />
    </div>
  );
};

export default Community;
