import SingleExperience from "./SingleExperience";

const experiences = [
  {
    icon: "./motorolasolutions.png",
    job: "GenAI & ML Intern",
    company: "Motorola Solutions",
    date: "May 2026 - August 2026",
    responsibilities: [
      "Probing frozen Gemini embeddings of ~2,800 transcripts to test a 1,000+ category intent taxonomy, achieving 54.6%/60.6% accuracy and 93.3% top-3 accuracy.",
      "Reframing weak clustering results (ARI ≈ 0.16) as a taxonomy-granularity artifact through probing experiments and stratified cross-validation.",
      "Mining probe confusion matrices to identify redundant intent categories and produce a ranked, data-driven taxonomy consolidation report.",
      "Calibrating intent probes with ECE and Brier score to develop a confidence-based human-in-the-loop workflow for labeling uncertain predictions.",
      "Building reproducible ML infrastructure and a multi-agent LLM evaluation system with Google ADK, parallel grading agents, and confidence-gated Gemini Flash → Pro routing.",
    ],
  },
  {
    icon: "./Create&Learn.png",
    job: "AI/CS Instructor",
    company: "Create & Learn",
    date: "June 2025 - August 2026",
    responsibilities: [
      "Teaching advanced, project-based classes on Python, machine learning, and deep learning to middle and high school students through live Zoom sessions.",
      "Guiding students through the complete AI development pipeline, including data preprocessing, model training, tuning, and evaluation using hands-on projects.",
      "Designing and delivering lessons on neural networks, computer vision, and NLP, introducing frameworks such as TensorFlow and PyTorch in accessible ways.",
      "Integrating core computer science concepts like algorithms, data structures, and logic into AI lessons to reinforce programming fundamentals.",
      "Collaborating with curriculum developers to refine AI content and ensure material stays current with modern ML and deep learning techniques.",
    ],
  },
  {
    icon: "./Live150.png",
    job: "AI Intern",
    company: "Live 150",
    date: "July 2025 - December 2025",
    responsibilities: [
      "Architecting Maya, an AI health coaching agent using Google ADK and Gemini 2.0 to provide personalized insights on nutrition, fitness, sleep, and metabolic health.",
      "Building REST APIs with FastAPI and Python for B2B integration, including secure authentication, session management, and conversation memory with SQLite.",
      "Developing multi-agent AI systems with sub-agents managing coaching tasks and integrating real-time health tracking data for recommendations.",
      "Designing API endpoints to simplify orchestration and enable smooth integration with B2B health portals while maintaining HIPAA-compliant handling.",
      "Using Google Gemini and OpenAI LLMs to create agents that analyze client health data, detect patterns, and provide actionable insights.",
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
