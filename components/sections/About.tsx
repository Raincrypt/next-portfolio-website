"use client";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView("About")

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Results-driven Web Developer with expertise in various
        technologies. Skilled in creating visually appealing and user-friendly
        websites. Strong problem-solving skills and a collaborative team player.
        Committed to staying updated with industry trends and delivering
        innovative solutions.
      </p>
      <p>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.{" "}
      </p>
      <p  className="mb-3">
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, and MongoDB
        </span>
        . I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and have a little stargazing session. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
