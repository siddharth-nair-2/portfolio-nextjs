import Banner from "@/components/Banner";
import Experience from "@/components/sections/Experience";
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";
import About from "../components/sections/About";
import Projects from "@/components/sections/Projects";
import Archive from "@/components/sections/Archive";
import { getData } from "./get-repos";
import { Repo } from "@/types/Repo";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default async function Home() {
  const tempRepos: Repo[] = await getData();
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
