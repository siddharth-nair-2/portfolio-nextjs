import LeftBar from "@/components/LeftBar";
import Image from "next/image";
import { montserrat } from "./fonts";

export default function Home() {
  return (
    <div className=" w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
        <LeftBar />
      </div>
      <div>a</div>
      <div>aa</div>
    </div>
  );
}
