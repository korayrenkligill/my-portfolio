"use client";
import React from "react";
import Lottie from "lottie-react";
import * as animationData from "@/json/lotties/about-me.json";
import { LuDownload } from "react-icons/lu";

const AboutMe = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-10">
      <div className="max-h-96 max-w-96 my-12">
        <Lottie animationData={animationData} />
      </div>
      <div className="max-w-96 flex flex-col items-center text-center md:text-left md:items-start">
        <h2 className="uppercase text-sm md:text-base md:leading-5 text-gray-400 ">
          about me
        </h2>
        <h1 className="text-2xl md:text-4xl md:leading-normal font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          About Me
        </h1>
        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          sed nemo architecto mollitia obcaecati consectetur provident quisquam.
          Voluptas, porro reprehenderit!
        </p>
        <button className="flex items-center gap-2 py-2 px-4 rounded-full text-white text-sm bg-purple-500">
          <LuDownload /> Download CV
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
