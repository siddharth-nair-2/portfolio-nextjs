"use client";

import React from "react";
import { motion } from "framer-motion";

const RightBar = () => {
  return (
    <motion.div
      className="left-right-line right-0 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <div className="left-right-base gap-6">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nairsid2@gmail.com"
          target="_blank"
        >
          <p className=" text-sm rotate-90 w-72 tracking-wide text-textGreen">
            nairsid2@gmail.com
          </p>
        </a>
        <div className="w-[2px] h-32 bg-textDark"></div>
      </div>
    </motion.div>
  );
};

export default RightBar;
