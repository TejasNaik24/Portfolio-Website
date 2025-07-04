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
      "Designed and ",
      "Collected and ana",
      "Conducted mr reviews ",
      "Attended weekly tech gaining exposure to software engineer",
      "Worked with 5+",
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
