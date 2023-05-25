"use client";

import { montserrat } from "@/app/fonts";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

type jobType = {
  id: number;
  title: string;
  company: string;
  date: string;
  points: string[];
};

const WorkInfo = ({ job }: { job: jobType }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl">
        {job.title}{" "}
        <span className=" text-textGreen tracking-wide">@{job.company}</span>
      </h3>
      <p className=" text-sm mt-1 font-medium text-textDark">{job.date}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {job.points.map((point, index) => (
          <li
            key={index}
            className={`${montserrat.className} text-base flex gap-2 text-textDark`}
          >
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default WorkInfo;
