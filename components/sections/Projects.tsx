import Image from "next/image";
import React from "react";
import { projectInfo } from "../data";
import SectionTitle from "../SectionTitle";

const Projects = () => {
  return (
    <section id="project" className=" max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I've Built" titleNo="03" />
      <div className=" w-full flex flex-col items-center justify-center gap-28 mt-10">
        {projectInfo.map((project) => (
          <div key={project.id}>
            <div>
              <Image
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
              />
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </section>
  );
};

export default Projects;
