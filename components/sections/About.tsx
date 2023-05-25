"use client";

import { montserrat } from "@/app/fonts";
import SectionTitle from "../SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import { profileImg } from "@/public/assets";

const TECH = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Angular",
  "Redux",
];

const About = () => {
  return (
    <motion.section
      id="about"
      className=" max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div
          className={`${montserrat.className} w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4`}
        >
          <p>
            Hello! I&apos;m Siddharth Nair, a passionate web developer with a
            strong focus on creating dynamic and engaging online experiences. My
            journey in computers began during my early teenage years when I
            first <span className=" text-textGreen">built my own PC</span>. This
            early exploration ignited my enthusiasm for the field.
          </p>
          <p>
            Since then, I have had the opportunity to learn in diverse
            environments, including an internship, freelance work, 4 years of
            University, and various personal projects. These experiences have
            enriched my skill set and provided me with a comprehensive
            understanding of{" "}
            <span className=" text-textGreen">web development</span> processes
            and best practices.
          </p>
          <p>
            {" "}
            I am motivated by the opportunity to combine my technical skills,
            creativity, and problem-solving abilities to build cutting-edge web
            solutions.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
            {TECH.map((tech) => (
              <li className="flex items-center gap-2" key={tech}>
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className=" rounded-lg h-full object-cover"
                src={profileImg}
                alt="profile img"
                width={380}
                height={385}
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-trasnlate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
