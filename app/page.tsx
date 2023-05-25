import Banner from "@/components/Banner";
import Experience from "@/components/sections/Experience";
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";
import About from "../components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className=" w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <LeftBar />
      <div className=" h-[88vh] w-full mx-auto p-4">
        <Banner />
        <About />
        <Experience />
        <Projects />
      </div>
      <RightBar />
    </div>
  );
}
