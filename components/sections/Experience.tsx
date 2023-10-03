"use client";

import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "../ui/SectionHeading";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-40 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <motion.div 
        className="flex flex-col gap-5"
      >
        {experiencesData.map((item, index) => (
          <ExperienceCard
            logo={item.companyLogoUrl ? item.companyLogoUrl : null}
            companyTitle={item.company}
            desc={item.description}
            jobProfile={item.jobProfile}
            key={index}
          />
        ))}
      </motion.div>
    </section>
  );
}
