import { montserrat } from "@/app/fonts";
import { Repo } from "@/types/Repo";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const ArchiveCard = ({ repo }: { repo: Repo }) => {
  return (
    <a href={repo.html_url} target="_blank">
      <div className=" w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-between gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className=" text-4xl text-textGreen" />
          <RxOpenInNewWindow className=" text-4xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-wide group-hover:text-textGreen">
            {repo.name}
          </h2>
          <p className={`${montserrat.className} text-sm mt-3`}>
            {repo.description}
          </p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          <li>{new Date(repo.pushed_at).toISOString().slice(0, 7)}</li>
          <li>{repo.language}</li>
          <li>{repo.size}Kb</li>
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
