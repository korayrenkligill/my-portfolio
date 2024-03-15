import MyEducations from "@/components/AboutMe/MyEducations";
import Header from "@/components/Common/Header";
import ShortInformationsContainer from "@/components/Common/ShortInformationsContainer";
import AboutMe from "@/components/Main/AboutMe";
import React from "react";

const page = () => {
  return (
    <section>
      <Header />
      <AboutMe />
      <MyEducations />
      <div className="py-6 px-2 my-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50">
        <ShortInformationsContainer />
      </div>
    </section>
  );
};

export default page;
