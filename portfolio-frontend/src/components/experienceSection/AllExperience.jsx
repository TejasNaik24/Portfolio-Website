import SingleExperience from "./SingleExperience";

const experiences = [
  {
    icon: "./OSUResearcher.png",
    job: "AI/ML Researcher",
    company: "The Ohio State University",
    date: "August 2025 - Present",
    responsibilities: [
      "Conducting deep learning research with Dr. Wei-Lun “Harry” Chao, focusing on computer vision, object detection, and image segmentation using PyTorch.",
      "Developing multi-model segmentation pipelines integrating YOLOv8, Grounding DINO, and SAM2 for high-precision detection and analysis.",
      "Building and optimizing data preprocessing and annotation workflows with OpenCV, NumPy, and COCO-format datasets to improve model accuracy and efficiency.",
      "Applying transformer and convolutional architectures to segment neural imaging data (IPS neurons), enhancing performance in complex visual environments.",
      "Performing hyperparameter tuning and evaluation with mAP, IoU, and Dice metrics while collaborating on reproducible, interpretable, and deployment-ready AI research.",
    ],
  },
  {
    icon: "./Live150.png",
    job: "AI Intern",
    company: "Live 150",
    date: "July 2025 - Present",
    responsibilities: [
      "Architecting Maya, an AI health coaching agent using Google ADK and Gemini 2.0 to provide personalized insights on nutrition, fitness, sleep, and metabolic health.",
      "Building REST APIs with FastAPI and Python for B2B integration, including secure authentication, session management, and conversation memory with SQLite.",
      "Developing multi-agent AI systems with sub-agents managing coaching tasks and integrating real-time health tracking data for recommendations.",
      "Designing API endpoints to simplify orchestration and enable smooth integration with B2B health portals while maintaining HIPAA-compliant handling.",
      "Using Google Gemini and OpenAI LLMs to create agents that analyze client health data, detect patterns, and provide actionable insights.",
    ],
  },
  {
    icon: "./Create&Learn.png",
    job: "AI/CS Instructor",
    company: "Create & Learn",
    date: "June 2025 - Present",
    responsibilities: [
      "Teaching advanced, project-based classes on Python, machine learning, and deep learning to middle and high school students through live Zoom sessions.",
      "Guiding students through the complete AI development pipeline, including data preprocessing, model training, tuning, and evaluation using hands-on projects.",
      "Designing and delivering lessons on neural networks, computer vision, and NLP, introducing frameworks such as TensorFlow and PyTorch in accessible ways.",
      "Integrating core computer science concepts like algorithms, data structures, and logic into AI lessons to reinforce programming fundamentals.",
      "Collaborating with curriculum developers to refine AI content and ensure material stays current with modern ML and deep learning techniques.",
    ],
  },
  {
    icon: "./IStartValley.png",
    job: "Engineering Intern",
    company: "iStart Valley",
    date: "June 2023 - November 2023",
    responsibilities: [
      "Contributed to the design and development of Valley projects, focusing on UX/UI and applying engineering principles to create functional and user-friendly prototypes.",
      "Analyzed detailed survey and usage data from 100+ users to guide feature prioritization and improve overall user experience and engagement.",
      "Conducted extensive research on 50+ fitness and health apps to identify trends, best practices, and potential areas for innovation in the product.",
      "Attended weekly technical workshops, design reviews, and project meetings to enhance coding skills, engineering knowledge, and problem-solving abilities.",
      "Collaborated closely with mentors and team members to refine project designs, ensure technical feasibility, and align with overall project goals and vision.",
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
