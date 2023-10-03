import {
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

interface ExperienceCardType {
    title: string;
    location: string;
    desc: string;
}

const ExperienceCard = ({title, location, desc}: ExperienceCardType) => {
  return (
    <VerticalTimelineElement>
      <h3 className="font-semibold capitalize">{title}</h3>
      <p className="font-normal !mt-0">{location}</p>
      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        {desc}
      </p>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
