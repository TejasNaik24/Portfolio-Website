import SingleExperience from "./SingleExperience";

const experiences = [
  {
    icon: "./Create&Learn.png",
    job: "Computer Science Instructor",
    company: "Create & Learn",
    date: "June 2025 - Present",
    responsibilities: [
      "Delivered project-based coding lessons to K–12 students, covering basics to AI/ML concepts.",
      "Specialized in Python and AI tools including neural networks and natural language processing.",
      "Built students’ problem-solving skills through interactive, hands-on activities.",
      "Connected computer science to game design, app development, and ethical considerations.",
      "Adapted lessons for diverse age groups within an engaging, supportive virtual classroom.",
    ],
  },
  {
    icon: "./IStartValley.png",
    job: "Engineering Intern",
    company: "iStart Valley",
    date: "June 2023 - November 2023",
    responsibilities: [
      "Designed and prototyped Efit Coach with strong focus on UX/UI and engineering principles.",
      "Analyzed detailed survey data from 100+ users to guide feature prioritization.",
      "Conducted extensive research on 50+ fitness apps to spot key trends and opportunities.",
      "Attended weekly technical workshops and project meetings to improve engineering skills.",
      "Collaborated closely with mentors to refine design and ensure technical feasibility.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col flex-wrap items-center justify-center gap-x-6">
      {experiences.map((experience, index) => {
        return <SingleExperience key={index} experience={experience} />;
      })}
    </div>
  );
};

export default AllExperience;
