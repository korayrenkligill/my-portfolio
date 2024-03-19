"use client";
import AboutMe from "@/components/Main/AboutMe";
import ContactForm from "@/components/Common/ContactForm";
import Header from "@/components/Common/Header";
import LastestBlogsContainer from "@/components/Main/LastestBlogsContainer";
import LastestProjectsContainer from "@/components/Main/LastestProjectsContainer";
import Services from "@/components/Main/Services";
import ShortInformations from "@/components/Main/ShortInformations";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const date = new Date();
    const now = Number(date.getTime());
    const expireDate = Number(localStorage.getItem("accessTokenexpireDate"));
    if (expireDate < now) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessTokenexpireDate");
    }
  }, []);
  return (
    <>
      <Header />
      <ShortInformations />
      <AboutMe />
      <Services />
      <LastestProjectsContainer />
      <LastestBlogsContainer />
      <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 relative">
        <ContactForm />
      </div>
    </>
  );
}
