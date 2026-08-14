import { useState } from "react";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSwift,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiPostman,
  SiTensorflow,
  SiNextdotjs,
  SiFastapi,
  SiLangchain,
  SiScikitlearn,
  SiGooglecloud,
  SiFirebase,
  SiGooglecloudstorage,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { SiStreamlit } from "react-icons/si";
import { IoLogoVue, IoLogoDocker } from "react-icons/io5";

import {
  AdkIcon,
  MatplotlibIcon,
  VertexAiIcon,
  CloudRunIcon,
  CloudBuildIcon,
  LangGraphIcon,
} from "./CustomIcons";

import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const languages = [
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "C++",
    icon: SiCplusplus,
  },
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "Swift",
    icon: FaSwift,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
];

const librariesFrameworks = [
  {
    skill: "PyTorch",
    icon: SiPytorch,
  },
  {
    skill: "TensorFlow",
    icon: SiTensorflow,
  },
  {
    skill: "Scikit-learn",
    icon: SiScikitlearn,
  },
  {
    skill: "LangChain",
    icon: SiLangchain,
  },
  {
    skill: "LangGraph",
    icon: LangGraphIcon,
  },
  {
    skill: "Google ADK",
    icon: AdkIcon,
  },
  {
    skill: "Matplotlib",
    icon: MatplotlibIcon,
  },
  {
    skill: "Numpy",
    icon: SiNumpy,
  },
  {
    skill: "Pandas",
    icon: SiPandas,
  },
  {
    skill: "FastApi",
    icon: SiFastapi,
  },
  {
    skill: "Streamlit",
    icon: SiStreamlit,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Node.js",
    icon: FaNode,
  },
  {
    skill: "Next.js",
    icon: SiNextdotjs,
  },
  {
    skill: "React.js",
    icon: FaReact,
  },
  {
    skill: "Vue.js",
    icon: IoLogoVue,
  },
];

const developerTools = [
  {
    skill: "Git",
    icon: FaGitAlt,
  },
  {
    skill: "Docker",
    icon: IoLogoDocker,
  },
  {
    skill: "PostMan",
    icon: SiPostman,
  },
  {
    skill: "GCP",
    icon: SiGooglecloud,
  },
  {
    skill: "Vertex AI",
    icon: VertexAiIcon,
  },
  {
    skill: "Cloud Run",
    icon: CloudRunIcon,
  },
  {
    skill: "Firestore",
    icon: SiFirebase,
  },
  {
    skill: "Cloud Build",
    icon: CloudBuildIcon,
  },
  {
    skill: "Cloud Storage",
    icon: SiGooglecloudstorage,
  },
];

const AllSkills = () => {
  const [showLanguages, setShowLanguages] = useState(true);
  const [showLibrariesFrameworks, setShowLibrariesFrameworks] = useState(false);
  const [showDeveloperTools, setShowDeveloperTools] = useState(false);

  const setLanguages = () => {
    setShowLanguages(true);
    setShowLibrariesFrameworks(false);
    setShowDeveloperTools(false);
  };

  const setLibrariesFrameworks = () => {
    setShowLanguages(false);
    setShowLibrariesFrameworks(true);
    setShowDeveloperTools(false);
  };

  const setDeveloperTools = () => {
    setShowLanguages(false);
    setShowLibrariesFrameworks(false);
    setShowDeveloperTools(true);
  };

  return (
    <div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        <button
          onClick={setLanguages}
          disabled={showLanguages}
          className={`w-24 sm:w-auto px-3 py-1 rounded-full text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-3 md:text-lg font-bold text-white border flex items-center gap-1 transition-all duration-500
            ${showLanguages
              ? "bg-gradient-to-r from-lightGrey to-black bg-gray-800 cursor-default hover:none border-darkGrey"
              : "border-cyan bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 hover:shadow-cyanShadow"
            }
            `}
        >
          Languages
        </button>
        <button
          onClick={setLibrariesFrameworks}
          disabled={showLibrariesFrameworks}
          className={`w-40 sm:w-auto px-3 py-1 rounded-full text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-3 md:text-lg font-bold text-white border flex items-center gap-1 transition-all duration-500
            ${showLibrariesFrameworks
              ? "bg-gradient-to-r from-lightGrey to-black bg-gray-800 cursor-default hover:none border-darkGrey"
              : "border-cyan bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 hover:shadow-cyanShadow"
            }
            `}
        >
          Libraries/Frameworks
        </button>
        <button
          onClick={setDeveloperTools}
          disabled={showDeveloperTools}
          className={`w-32 sm:w-auto px-3 py-1 rounded-full text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-3 md:text-lg font-bold text-white border flex items-center gap-1 transition-all duration-500
            ${showDeveloperTools
              ? "bg-gradient-to-r from-lightGrey to-black bg-gray-800 cursor-default hover:none border-darkGrey"
              : "border-cyan bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 hover:shadow-cyanShadow"
            }
            `}
        >
          Developer Tools
        </button>
      </motion.div>

      {showLanguages && (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 my-20">
          {languages.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill text={item.skill} imgSvg={<item.icon />} />
            </motion.div>
          ))}
        </div>
      )}

      {showLibrariesFrameworks && (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 my-20">
          {librariesFrameworks.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill text={item.skill} imgSvg={<item.icon />} />
            </motion.div>
          ))}
        </div>
      )}

      {showDeveloperTools && (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 my-20">
          {developerTools.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill text={item.skill} imgSvg={<item.icon />} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllSkills;
