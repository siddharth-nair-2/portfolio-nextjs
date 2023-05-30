"use client";

import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { motion } from "framer-motion";

const LeftBar = () => {
  return (
    <motion.div
      className="left-right-line left-0 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <div className="left-right-base gap-4">
        <div className=" flex flex-col gap-4">
          <a href="https://github.com/siddharth-nair-2/" target="_blank">
            <span className="left-menu-icons">
              <TbBrandGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth-nair2/"
            target="_blank"
          >
            <span className="left-menu-icons">
              <SlSocialLinkedin />
            </span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nairsid2@gmail.com"
            target="_blank"
          >
            <span className="left-menu-icons">
              <GoMail />
            </span>
          </a>
        </div>
        <div className="w-[2px] h-32 bg-textDark"></div>
      </div>
    </motion.div>
  );
};

export default LeftBar;
