import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Services from "@/components/Services";
import ShortInformations from "@/components/ShortInformations";

export default function Home() {
  return (
    <>
      <Header />
      <ShortInformations />
      <AboutMe />
      <Services />
    </>
  );
}
