"use client";
import { logoImg } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ReactGA from "react-ga4";
import { MdOutlineClose } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { TbBrandGithub } from "react-icons/tb";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    ReactGA.event({
      action: "navbar_link",
      category: "Navbar",
      label: targetId,
    });
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const handleMenu = (e: any) => {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  };

  const handleAnalyticsEvent = () => {
    ReactGA.event({
      category: "Navbar",
      action: "Check Resume",
      label: "checked_resume",
    });
  };

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
          <Image
            src={logoImg}
            alt="profile logo"
            className="w-14"
            priority={true}
          />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          {/* Navbar items - MD+ devices */}
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              className="navbar-options nav-link"
              onClick={handleClick}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              className="navbar-options nav-link"
              onClick={handleClick}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className=" text-textGreen">01.</span>About
              </motion.li>
            </Link>
            <Link
              href="#experience"
              className="navbar-options nav-link"
              onClick={handleClick}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className=" text-textGreen">02.</span>Experience
              </motion.li>
            </Link>
            <Link
              href="#project"
              className="navbar-options nav-link"
              onClick={handleClick}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className=" text-textGreen">03.</span>Project
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="navbar-options nav-link"
              onClick={handleClick}
            >
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
            onClick={handleAnalyticsEvent}
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
        <div
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
          onClick={() => {
            ReactGA.event({
              action: "mobile_menu_toggle",
              category: "Navbar_mobile",
              label: "mobile menu",
            });
            setShowMenu(true);
          }}
        >
          <span className=" menu-style group-hover:translate-x-2 "></span>
          <span className=" menu-style translate-x-3 group-hover:translate-x-0 "></span>
          <span className=" menu-style translate-x-1 group-hover:translate-x-3 "></span>
        </div>
        {/* Mobile Menu */}
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleMenu}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className=" w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
                onClick={() => setShowMenu(false)}
              />
              <div className="flex flex-col items-center gap-7">
                {/* Navbar Items - SM devices */}
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    className="navbar-options nav-link"
                    onClick={handleClick}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    className="navbar-options nav-link"
                    onClick={handleClick}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      <span className=" text-textGreen">01.</span>About
                    </motion.li>
                  </Link>
                  <Link
                    href="#experience"
                    className="navbar-options nav-link"
                    onClick={handleClick}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className=" text-textGreen">02.</span>Experience
                    </motion.li>
                  </Link>
                  <Link
                    href="#project"
                    className="navbar-options nav-link"
                    onClick={handleClick}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className=" text-textGreen">03.</span>Project
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    className="navbar-options nav-link"
                    onClick={handleClick}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      <span className=" text-textGreen">04.</span>Contact
                    </motion.li>
                  </Link>
                </ul>
                {/* Resume Button - SM devices */}
                <a
                  href="/assets/Siddharth Nair - Resume.pdf"
                  target="_blank"
                  title="Siddharth Nair Resume"
                >
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className=" w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                {/* Social Media Icons - SM devices */}
                <div className="flex gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, ease: "easeIn" }}
                    href="https://github.com/siddharth-nair-2/"
                    target="_blank"
                  >
                    <span className="mobile-menu-icons">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.85, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/siddharth-nair2/"
                    target="_blank"
                  >
                    <span className="mobile-menu-icons">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nairsid2@gmail.com"
                    target="_blank"
                  >
                    <span className="mobile-menu-icons">
                      <GoMail />
                    </span>
                  </motion.a>
                </div>
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className=" text-sm w-72 tracking-widest text-textGreen text-center mt-4"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nairsid2@gmail.com"
                target="_blank"
              >
                <p>nairsid2@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
