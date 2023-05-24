import Image from "next/image";
import { montserrat } from "./fonts";

export default function Home() {
  return (
    <div className={`${montserrat.className} text-6xl`}>WHAT ARE YA DOING</div>
  );
}
