import Experience from "@/components/sections/Experience";
import About from "../components/sections/About";
import Projects from "@/components/sections/Projects";
import Archive from "@/components/sections/Archive";
import { getData } from "./get-repos";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import LeftBar from "@/components/smaller-components/LeftBar";
import Banner from "@/components/smaller-components/Banner";
import RightBar from "@/components/smaller-components/RightBar";

export default async function Home() {
  const tempRepos = await getData();
  return (
    <div className=" w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <LeftBar />
      <div className=" h-[88vh] w-full mx-auto p-4">
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Archive tempRepos={tempRepos} />
        <Contact />
        <Footer />
      </div>
      <RightBar />
    </div>
  );
}
