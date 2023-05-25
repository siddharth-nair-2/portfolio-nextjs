import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <div className="hidden md:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/siddharth-nair-2/" target="_blank">
        <span className="left-menu-icons">
          <TbBrandGithub />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/siddharth-nair2/" target="_blank">
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
  );
};

export default Footer;
