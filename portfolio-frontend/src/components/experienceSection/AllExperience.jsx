import SingleExperience from "./SingleExperience";

const experiences = [
  {
    icon: "./OSUResearcher.png",
    job: "AI/ML Researcher",
    company: "The Ohio State University",
    date: "August 2025 - Present",
    responsibilities: [
      "Conduct deep learning research with Dr. Wei-Lun “Harry” Chao, focusing on computer vision, object detection, and image segmentation using PyTorch.",
      "Developed multi-model segmentation pipelines integrating YOLOv8, Grounding DINO, and SAM2 for high-precision detection and analysis",
      "Built and optimized data preprocessing and annotation workflows with OpenCV, NumPy, and COCO-format datasets to improve model accuracy and efficiency.",
      "Applied transformer and convolutional architectures to segment neural imaging data (IPS neurons), enhancing performance in complex visual environments.",
      "Performed hyperparameter tuning and evaluation with mAP, IoU, and Dice metrics while collaborating on reproducible, interpretable, and deployment-ready AI research.",
    ],
  },
  {
    icon: "./Live150.png",
    job: "AI Intern",
    company: "Live 150",
    date: "July 2025 - Present",
    responsibilities: [
      "Architecting Maya, an AI health coach using Google ADK and Gemini 2.0 to deliver personalized guidance on nutrition, fitness, sleep, and metabolic health for clients.",
      "Building REST APIs with FastAPI and Python for B2B integration, implementing secure authentication, session management, and conversation memory with SQLite.",
      "Developing multi-agent AI systems with sub-agents that autonomously manage coaching tasks and integrate real-time health tracking data for recommendations.",
      "Designing API endpoints to simplify agent orchestration, enabling smooth integration with B2B health portals while maintaining HIPAA-compliant data handling.",
      "Using Google Gemini and OpenAI LLMs to create conversational agents that analyze health data, detect patterns, and provide actionable insights.",
    ],
  },
  {
    icon: "./Create&Learn.png",
    job: "AI/CS Instructor",
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
