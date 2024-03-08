import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import chaosDoodlesLogo from "@/public/company_logo/chaosDoodles.png"
import project6Img from "@/public/projects/project6.png";
import project2Img from "@/public/projects/project2.png";
import project5Img from "@/public/projects/project5.png";
import project4Img from "@/public/projects/project4.png";
import { PersonalDetailsDataType } from "./types";

export const personalDetailsData: PersonalDetailsDataType = {
  name: "Mousom",
  email: "mousoms2204@gmail.com",
  yrsOfExp: 1,
  fieldOfOccupation: "Web Developer",
  linkedinUrl: "https://www.linkedin.com/in/mousom-sarkar-a38b21165/",
  githubUrl: "https://github.com/Raincrypt",
  leetcode: "https://leetcode.com/Raincrypt/"
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    companyLogoUrl: chaosDoodlesLogo,
    company: "Chaos Doodles",
    jobProfile: "Front-End Developer",
    description:
      "Worked on their website as a Front-End Developer. Responsibilities include updating website UI, Adding components like carousel, testimonies etc..",
    icon: React.createElement(FaLaptopCode),
    date: "2021 - 2022",
  },
]

// Make Sure the Id is Unique
export const projectsData = [
  {
    id:"notex",
    title: "NoteX",
    description:
      "Created a Note Builder App where users can maintain, customize and share their notes and documents.",
    tags: ["React", "Next", "Tailwind", "Shadcn", "Convex"],
    imageUrl: project5Img,
    projectUrl: "https://notex-notes-app.vercel.app/",
  },
  {
    id:"eventhub",
    title: "EventHub",
    description:
      "Created a Event hosting website where people can buy tickets for an event or advertise their own event.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Shadcn"],
    imageUrl: project6Img,
    projectUrl: "https://eventhub-ind.vercel.app/",
  },
  {
    id:"raincrypto",
    title: "RainCrypto",
    description:
      "Developed a web application for crypto trading with real-time data. User can view all crypto related data in a single place.",
    tags: ["React", "JavaScript", "Chakra UI"],
    imageUrl: project2Img,
    projectUrl: "https://raincrypto-raincrypt.vercel.app/",
  },
  {
    id:"2048-game",
    title: "2048 Game",
    description:
      "Created a 2048 game, which is a fun game to improve your cognitive function, memory, and problem-solving skills.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: project4Img,
    projectUrl: "https://2048-game-ten.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Sass",
  "Shadcn",
  "Chakra UI",
  "MongoDB",
  "Firebase",
  "Framer Motion",
  "Contentful CMS",
  "Clerk",
  "Shopify",
  "C/C++"
] as const;