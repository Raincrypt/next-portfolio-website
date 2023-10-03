"use client";

import { useTheme } from "@/context/themeContext";
import Image, { StaticImageData } from "next/image";
import "react-vertical-timeline-component/style.min.css";
import logoLight from "@/public/company_logo/placeholder.png";
import logoDark from "@/public/company_logo/placeholder_dark.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ExperienceCardType {
  logo: string | null;
  companyTitle: string;
  jobProfile: string;
  desc: string;
}

const ExperienceCard = ({
  companyTitle,
  jobProfile,
  desc,
  logo,
}: ExperienceCardType) => {
  const { theme } = useTheme();
  const placeholderLogo = theme === "light" ? logoLight : logoDark;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="bg-gray-100 dark:bg-white/10 p-6 rounded-lg max-w-[42rem] borderBlack"
    >
      <div className="flex flex-col gap-3 justify-between items-center mb-6 sm:flex-row">
        <div className="flex gap-2 items-center">
          {logo ? (
            <Image src={logo} width={30} height={30} alt={companyTitle} />
          ) : (
            <Image
              src={placeholderLogo}
              width={30}
              height={30}
              alt="Company Logo"
            />
          )}
          <h3 className="text-gray-700 dark:text-white/70 font-bold capitalize text-xl">
            {companyTitle}
          </h3>
        </div>
        <p className="font-normal">{jobProfile}</p>
      </div>

      <p className="font-normal text-gray-700 dark:text-white/75">
        {desc}
      </p>
    </motion.article>
  );
};

export default ExperienceCard;
