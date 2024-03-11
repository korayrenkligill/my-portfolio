import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import Button from "./Buttons/Button";
import socialMedias from "@/json/socialMedias.json";

const SocialMediaIcon = (socialMedia: string) => {
  switch (socialMedia) {
    case "instagram":
      return <FaInstagram />;
    case "linkedin":
      return <FaLinkedinIn />;
    case "github":
      return <FaGithub />;
    default:
      return <MdBlock />;
  }
};

const Header = () => {
  return (
    <div className="border-b bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 relative">
      <div className="container mx-auto py-32 flex flex-col items-center gap-6">
        <h1 className="flex flex-col items-center">
          <span className="text-sm md:text-xl md:leading-5">Hi</span>
          <span className="text-lg md:text-3xl md:leading-8">
            I&apos;m <span className="font-semibold">Koray Renkligil</span>
          </span>
          <span className="text-xl md:text-5xl md:leading-normal font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            FRONT-END DEVELOPER
          </span>
        </h1>
        <Button type="outlined-rounded">Let&apos;s Talk</Button>
      </div>
      <div className="p-2 gap-4 inline-flex flex-col absolute right-0 bottom-0">
        {socialMedias.map((socialMedia, key) => (
          <a
            key={key}
            className={`order-${socialMedia.order} p-2 text-sm rounded-full border border-gray-400 text-gray-500 transition-colors duration-500 cursor-pointer hover:border-gray-600 hover:text-gray-700`}
          >
            {SocialMediaIcon(socialMedia.socialMediaName)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
