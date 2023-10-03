import { projectsData } from "@/lib/data";
import Link from "next/link";

type UrlType = (typeof projectsData)[number]["projectUrl"]

type ButtonDefaultType = { children: string, readonly url: UrlType, styleAddOn?: string };

const ButtonDefault = ({ children, url, styleAddOn }: ButtonDefaultType) => {
  return (
    <Link
      href={url}
      target="_blank"
      className={`bg-gray-900/60 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition ${styleAddOn && styleAddOn}`}
    >
      {children}
    </Link>
  );
};

export default ButtonDefault;