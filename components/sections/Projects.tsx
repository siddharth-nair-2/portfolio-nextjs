import { montserrat } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import { projectInfo } from "../data";
import SectionTitle from "../SectionTitle";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className=" max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I've Built" titleNo="03" />
      <div className=" w-full flex flex-col items-center justify-between gap-20 ">
        {projectInfo.map((project, index) => (
          <div
            className=" w-full flex flex-col items-center justify-center gap-28 mt-10"
            key={project.id}
          >
            <div
              className={` flex flex-col ${
                index % 2 === 1 ? "xl:flex-row-reverse" : "xl:flex-row"
              } gap-6`}
            >
              <a
                href={project.demo}
                target="_blank"
                className=" w-full xl:w-1/2 h-auto relative group"
              >
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </a>
              <div
                className={` w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right ${
                  index % 2 === 1 ? "" : "xl:-ml-16"
                }  z-10`}
              >
                <div>
                  <p className=" text-textGreen text-sm tracking-wide">
                    Featured Project
                  </p>
                  <h3 className={`text-2xl font-bold ${montserrat.className}`}>
                    {project.title}
                  </h3>
                </div>
                <p
                  className={`${
                    montserrat.className
                  } bg-[#112240] text-sm md:text-base p-2 ${
                    index % 2 === 1 ? "xl:-mr-16" : ""
                  } md:p-6 rounded-md`}
                >
                  {project.description}
                </p>
                <ul className=" text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="text-2xl flex gap-4">
                  <a
                    href={project.github}
                    className=" hover:text-textGreen duration-300"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </a>
                  <a
                    href={project.demo}
                    className=" hover:text-textGreen duration-300"
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
