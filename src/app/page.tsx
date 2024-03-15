import AboutMe from "@/components/Main/AboutMe";
import ContactForm from "@/components/Common/ContactForm";
import Header from "@/components/Common/Header";
import LastestBlogsContainer from "@/components/Main/LastestBlogsContainer";
import LastestProjectsContainer from "@/components/Main/LastestProjectsContainer";
import Services from "@/components/Main/Services";
import ShortInformations from "@/components/Main/ShortInformations";

export default function Home() {
  return (
    <>
      <Header />
      <ShortInformations />
      <AboutMe />
      <Services />
      <LastestProjectsContainer />
      <LastestBlogsContainer />
      <ContactForm />
    </>
  );
}
