"use client";

import { montserrat } from "@/app/fonts";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

const Banner = () => {
  const handleAnalyticsEvent = () => {
    ReactGA.event({
      category: "Banner",
      action: "Check_Out_projects",
      label: "check_projects",
    });
  };
  return (
    <section
      id="home"
      className=" max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        className=" text-lg tracking-wide text-textGreen"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-semibold flex flex-col"
      >
        Siddharth Nair.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          Crafting Digital Experiences.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={`${montserrat.className} text-base md:max-w-[650px] text-textDark font-medium`}
      >
        I am a New Graduate Software Developer specializing in Software and
        Full-stack development. I have a strong foundation in front & back-end
        development and am skilled in creating user-friendly and responsive web
        apps using modern technology. <br />
      </motion.p>
      <motion.button
        className="w-52 h-14 text-sm border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <a
          href="https://github.com/siddharth-nair-2/"
          target="_blank"
          onClick={handleAnalyticsEvent}
        >
          Check out my projects!
        </a>
      </motion.button>
    </section>
  );
};

export default Banner;
