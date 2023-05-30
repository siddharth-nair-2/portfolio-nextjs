"use client";

import React, { useState } from "react";
import ArchiveCard from "../smaller-components/ArchiveCard";
import { motion } from "framer-motion";
import { Repo } from "@/types/Repo";
import ReactGA from "react-ga4";
import { montserrat } from "@/app/fonts";

interface ArchiveProps {
  tempRepos: Repo[];
}

const Archive = ({ tempRepos }: ArchiveProps) => {
  const [showMore, setShowMore] = useState(false);
  const repos = tempRepos.slice(0, 18);
  if (!repos) return <div>loading...</div>;

  return (
    <div className=" max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className=" text-3xl font-semibold">Other Projects</h2>
        <p className="text-sm text-textGreen">view the archive</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {repos.slice(0, 6).map((repo: Repo) => (
          <ArchiveCard key={repo.id} repo={repo} />
        ))}
        {showMore && (
          <>
            {repos.slice(6).map((repo: Repo, index: number) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: (index + 1) / 10 }}
                key={repo.id}
              >
                <ArchiveCard repo={repo} />
              </motion.div>
            ))}
          </>
        )}
      </div>
      <div className=" mt-12 flex items-center justify-center">
        <button
          className={`${montserrat.className} w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300`}
          onClick={() => {
            ReactGA.event({
              category: "Archive",
              action: "Load_More_Repos",
              label: "loaded repos",
            });
            setShowMore((prev) => !prev);
          }}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Archive;
