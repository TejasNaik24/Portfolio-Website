import SingleExperience from "./SingleExperience";

const experiences = [
  {
    icon: "./Create&Learn.png",
    job: "Computer Science Instructor",
    company: "Create & Learn",
    date: "June 2025 - Present",
    responsibilities: [
      "Teach engaging, project-based coding classes to K–12 students, covering a range of topics from foundational programming concepts to advanced artificial intelligence and machine learning.",
      "Specialize in Python and AI/ML curriculum, guiding students through real-world applications such as neural networks, natural language processing, and generative AI tools.",
      "Help students build computational thinking and problem-solving skills through interactive, hands-on lessons tailored to their learning pace and interests.",
      "Foster curiosity and creativity by connecting computer science to areas like game design, app development, and ethical AI.",
      "Adapt teaching methods and materials to suit different age groups and learning styles, while maintaining a fun, supportive, and inclusive virtual classroom environment.",
    ],
  },
  {
    icon: "./IStartValley.png",
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
    <div className="flex flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return <SingleExperience key={index} experience={experience} />;
      })}
    </div>
  );
};

export default AllExperience;
