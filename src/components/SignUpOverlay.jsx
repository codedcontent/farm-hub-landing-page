import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CustomButton from "./CustomButton";
import signUpCompleted from "../assets/singup completed.jpeg";

const SignUpOverlay = ({ close }) => {
  const [signedUp, setSignedUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSignedUp(true);
  };
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center h-screen w-screen z-50 bg-gray-100/95">
      {signedUp ? (
        <div className="flex flex-col place-items-center w-3/4 md:w-96 py-4 border-2 border-secondary rounded-md space-y-4">
          <img src={signUpCompleted} />

          <p className="font-bold">Thanks for signing up.</p>

          <CustomButton title={"Okay, thanks"} handleClick={close} />
        </div>
      ) : (
        <>
          <div className="absolute bottom-20 md:top-20 md:right-40">
            <CancelIcon
              fontSize="large"
              className="text-red-500"
              onClick={close}
            />
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
        </>
      )}
    </div>
  );
};

export default SignUpOverlay;
