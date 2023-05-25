"use client";
import { montserrat } from "@/app/fonts";
import { logoImg } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className=" w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div
        className={` max-w-container h-full mx-auto py-1 flex items-center justify-between`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={logoImg} alt="profile logo" className="w-14" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link href="#home" className="navbar-options nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link href="#about" className="navbar-options nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className=" text-textGreen">01.</span>About
              </motion.li>
            </Link>
            <Link href="#experience" className="navbar-options nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className=" text-textGreen">02.</span>Experience
              </motion.li>
            </Link>
            <Link href="#project" className="navbar-options nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className=" text-textGreen">03.</span>Project
              </motion.li>
            </Link>
            <Link href="#contact" className="navbar-options nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className=" text-textGreen">04.</span>Contact
              </motion.li>
            </Link>
          </ul>
          <a
            href="/assets/Siddharth Nair - Resume.pdf"
            target="_blank"
            title="Siddharth Nair Resume"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className=" px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Small Icon section */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className=" menu-style group-hover:translate-x-2 "></span>
          <span className=" menu-style translate-x-3 group-hover:translate-x-0 "></span>
          <span className=" menu-style translate-x-1 group-hover:translate-x-3 "></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
