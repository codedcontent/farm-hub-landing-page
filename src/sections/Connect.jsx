import React from "react";
import personImage from "../assets/person.jpg";
import CustomButton from "../components/CustomButton";

const Connect = () => {
  return (
    <div className="px-12 xl:px-0 h-screen w-full flex flex-col justify-center lg:items-start items-center lg:space-y-14 space-y-7">
      <p className="lg:text-3xl text-2xl uppercase">Connect with farm hub</p>

      <div className="flex flex-col lg:flex-row lg:px-10 items-center lg:gap-32 gap-6">
        <p className="lg:text-xl flex-1 text-center lg:text-left">
          We like to keep in touch with our customers and with our community so
          we've gone on and created accounts on various social media platforms. You can
          reach out to us there for any inquires and updates from us or send us an email with the
          button bellow.
        </p>

        <div className="flex flex-col space-y-2">
          <a
            href="https://twitter.com/i_am_meph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton title={"Twitter"} customStyle={"bg-[#1DA1F2]"} />
          </a>

          <a
            href="https://www.youtube.com/channel/UCiP_7L3UUyCzCQDiIoHQKnw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton title={"Youtube"} customStyle={"bg-[#C4302B]"} />
          </a>

          <a
            href="https://www.instagram.com/i.am.meph/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton title={"Instagram"} customStyle={"bg-[#F17503]"} />
          </a>
        </div>
      </div>

      <CustomButton title={"Contact us"} />
    </div>
  );
};

export default Connect;
