import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CustomButton from "./CustomButton";

const SignUpOverlay = ({ close }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    close();
  };
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center h-screen w-screen z-50 bg-gray-100/95">
      <div className="absolute top-20 md:right-20">
        <CancelIcon fontSize="large" className="text-red-500" onClick={close} />
      </div>

      <form
        className="w-11/12 m-auto flex flex-col items-center space-y-2 md:w-3/4 lg:w-1/2"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <p className="text-2xl">Sign up here</p>

        <input
          type="text"
          className="w-full border-2 p-2 placeholder:text-sm rounded-md"
          placeholder="Enter your full name"
        />

        <input
          type="email"
          className="w-full border-2 p-2 placeholder:text-sm rounded-md"
          placeholder="Enter your email"
        />

        <input
          type="password"
          className="w-full border-2 p-2 placeholder:text-sm rounded-md"
          placeholder="Enter your password"
        />

        <CustomButton title={"Submit"} customStyle="w-full" />
      </form>
    </div>
  );
};

export default SignUpOverlay;
