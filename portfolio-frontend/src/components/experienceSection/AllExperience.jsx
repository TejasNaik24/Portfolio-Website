import React from "react";
import SingleExperience from "./SingleExperience";

const experiences = [
  {
    job: "Computer Science Instructor",
    company: "Create & Learn",
    date: "June 2025 - Present",
    responsibilities: [
      "teaching kids what code is",
      "teaching ifi ocde is cool",
      "code is the best cuz its code",
    ],
  },
  {
    job: "Engineering Intern",
    company: "iStart Valley",
    date: "June 2023 - November 2023",
    responsibilities: [
      "Designed and prototyped Efit Coach, a fitness coaching app concept, applying engineering principles and UX/UI design to create an intuitive user experience.",
      "Collected and analyzed survey data from 100+ potential users, translating insights into feature recommendations.",
      "Conducted market research on 50+ fitness apps, analyzing user reviews and features to identify key trends and improve app functionality.",
      "Attended weekly technical workshops and project meetings, gaining exposure to software engineering workflows and product development cycles.",
      "Worked with 5+ industry mentors and professionals, refining the app’s design and ensuring technical feasibility.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return <SingleExperience key={index} experience={experience} />;
      })}
    </div>
  );
};

export default AllExperience;
