"use client";
import AboutMe from "@/components/Main/AboutMe";
import ContactForm from "@/components/Common/ContactForm";
import Header from "@/components/Common/Header";
import LastestBlogsContainer from "@/components/Main/LastestBlogsContainer";
import LastestProjectsContainer from "@/components/Main/LastestProjectsContainer";
import Services from "@/components/Main/Services";
import ShortInformations from "@/components/Main/ShortInformations";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function Home() {
  // const [username, setUsername] = useState("korayrenkligil");
  // const [email, setEmail] = useState("koray.renkligill@gmail.com");
  // const [password, setPassword] = useState("h1597534545");

  // useEffect(() => {
  //   console.log("test");
  //   (async () => {
  //     console.log("test1");
  //     try {
  //       console.log("test2");
  //       const newUser = { username, email, password };
  //       await axios.post("http://localhost:8080/api/users", newUser);
  //       console.log("Yeni kullanıcı başarıyla oluşturuldu:", newUser);
  //     } catch (error) {
  //       console.log("error test");
  //       console.error("Kullanıcı oluşturulurken bir hata oluştu:", error);
  //     }
  //   })();
  //   console.log("error test4");
  // }, []);
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
