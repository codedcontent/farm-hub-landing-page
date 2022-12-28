import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const SignUpOverlay = ({ close }) => {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center h-screen w-screen z-50 bg-gray-100/50">
      <div className="absolute top-20 right-20">
        <CancelIcon fontSize="large" className="text-red-500" onClick={close} />
      </div>


      <p className="text-2xl">Sign up here</p>
    </div>
  );
};

export default SignUpOverlay;
