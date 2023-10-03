import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/project1.jpg";
import rmtdevImg from "@/public/project2.jpg";
import wordanalyticsImg from "@/public/project3.jpg";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Gurgaon, Haryana",
    description:
      "Worked on their website as a Front-End Developer. Responsibilities include updating website UI, Adding components like carousel, testimonies etc..",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Nector",
    description:
      "Created a social media website where people can express their opinions freely",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Shadcn"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Xcrypto",
    description:
      "Developed a web application for crypto trading with real-time data. User can view all crypto related data in a single place.",
    tags: ["React", "JavaScript", "Sass", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Netflix Clone",
    description:
      "Created a Netflix Clone that displays Latest Movies real time.",
    tags: ["React", "Tailwind", "Firebase"],
    imageUrl: wordanalyticsImg,
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
  "MongoDB",
  "Firebase",
  "Framer Motion",
  "Contentful CMS",
  "Clerk",
  "Shopify",
  "C/C++"
] as const;