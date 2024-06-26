"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData
          .filter((project, index) => index < 4 && project)
          .map((project) => (
            <React.Fragment key={project.id}>
              <ProjectCard {...project} />
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}
