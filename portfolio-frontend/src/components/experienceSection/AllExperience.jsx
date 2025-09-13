import SingleExperience from "./SingleExperience";

const experiences = [
  {
    icon: "./OSUResearcher.png",
    job: "AI/ML Researcher",
    company: "The Ohio State University",
    date: "August 2025 - Present",
    responsibilities: [
      "Developed an action-based video re-identification model in PyTorch for player identification across clips.",
      "Applied Python and computer vision techniques, including object detection and tracking, to segment and identify basketball players.",
      "Built a data annotation workflow with Grounded-DINO and SAM2 to create high-quality training datasets.",
      "Contributed to research combining sports analytics and AI, translating theory into practical solutions.",
      "Implemented and debugged deep learning models, training neural networks for video analysis.",
    ],
  },
  {
    icon: "./Live150.png",
    job: "AI Intern",
    company: "Live 150",
    date: "July 2025 - Present",
    responsibilities: [
      "Developing full-stack web features using Next.js for frontend and Python Flask for backend to enhance the Live150 app’s capabilities.",
      "Integrating and fine-tuning large language models (LLMs) with OpenAI APIs to enable AI-powered functionalities and improve user experience.",
      "Collaborating on AI-driven solutions that leverage natural language processing and machine learning techniques within the app ecosystem.",
      "Building scalable, maintainable code while learning best practices in AI application development and deployment.",
      "Working closely with the engineering team to bridge frontend and backend development focused on AI integrations.",
    ],
  },
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
      {experiences.map((experience, index) => {
        return <SingleExperience key={index} experience={experience} />;
      })}
    </div>
  );
};

export default AllExperience;
