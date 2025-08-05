import SingleProject from "./SingleProject";
import ProjectsText from "./ProjectsText";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { SiNumpy } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    image: "./TennisBall.png",
    name: "Tennis-Coach-AI",
    techStack: [
      FaReact,
      SiTypescript,
      FaCss3Alt,
      FaPython,
      IoLogoJavascript,
      FaHtml5,
      IoLogoDocker,
    ],
    description:
      "Tennis Coach AI is a voice-enabled virtual assistant built with React, TypeScript, and Flask. It uses speech recognition and the Hugging Face API to provide real-time tennis coaching through natural, interactive voice conversations. Fully Dockerized for easy deployment.",
    gitHubLink: "https://github.com/TejasNaik24/Tennis-Coach-AI",
    demoLink: "https://tennis-coach-ai.vercel.app",
  },
  {
    image: "./SpaceShip.png",
    name: "HyperNova-Strike",
    techStack: [FaHtml5, FaCss3Alt, IoLogoJavascript],
    description:
      "HyperNova-Strike is a fast-paced space shooter built with HTML, CSS, and JavaScript using OOP. It features pixel art, smooth animations, modular game classes, and dynamic gameplay on an HTML5 canvas. Players battle waves of aliens and bosses, aiming for the highest score.",
    gitHubLink: "https://github.com/TejasNaik24/HyperNova-Strike",
    demoLink: "https://hypernova-strike.vercel.app",
  },
  {
    image: "./NN.png",
    name: "Neural Network From Scratch",
    techStack: [FaPython, SiNumpy],
    description:
      "A simple feedforward neural network built from scratch in Python using NumPy. Trained on the XOR dataset, it uses OOP for clean, modular code and implements forward and backpropagation with sigmoid activation and binary cross-entropy loss.",
    gitHubLink: "https://github.com/TejasNaik24/NeuralNetwork-From-Scratch",
    demoLink:
      "https://drive.google.com/file/d/1YpVzB6VQXRyj1WNqQmXgUmp_3Y6uaZax/view",
  },
  {
    image: "./Personal_Finance_Tracker.png",
    name: "Personal Finance Tracker",
    techStack: [SiCplusplus],
    description:
      "A personal finance tracker built in C++ with object-oriented design. Users can manage income and expenses by month, view financial summaries, and export data to CSV. Includes file I/O, menu-driven interaction, and input validation for a smooth command-line experience.",
    gitHubLink: "https://github.com/TejasNaik24/Personal-Finance-Tracker",
    demoLink:
      "https://drive.google.com/file/d/1nWzTE9D0tjEIfbEN6k0OqfCOIK7urn3Y/view",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {projects.map((project, index) => {
          return <SingleProject key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
