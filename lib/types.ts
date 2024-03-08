import React, { ReactNode } from "react";
import { links } from "./data";

export type PersonalDetailsDataType = {
  name: string;
  email: string;
  yrsOfExp: number;
  fieldOfOccupation: string;
  linkedinUrl: string;
  githubUrl: string;
  leetcode: string;
}

export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};