import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoMail } from "react-icons/go";

const LeftBar = () => {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className=" flex flex-col gap-4">
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
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftBar;
