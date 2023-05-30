"use client";

import { montserrat } from "@/app/fonts";
import React, { useState } from "react";
import { event } from "nextjs-google-analytics";
import SectionTitle from "../smaller-components/SectionTitle";
import { jobInfo } from "../smaller-components/data";
import WorkInfo from "../smaller-components/WorkInfo";

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState(jobInfo[0]);

  return (
    <section
      id="experience"
      className=" max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I've worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className={`md:w-64 flex flex-col ${montserrat.className}`}>
          {jobInfo.map((job) => (
            <li
              className={`${
                job === activeCompany
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              key={job.id}
              onClick={() => {
                event("Change_company", {
                  category: "Experience",
                  label: "changed company",
                });
                setActiveCompany(job);
              }}
            >
              {job.company}
            </li>
          ))}
        </ul>
        <WorkInfo job={activeCompany} />
      </div>
    </section>
  );
};

export default Experience;
