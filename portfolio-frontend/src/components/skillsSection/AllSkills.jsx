import { useState } from "react";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSwift } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { IoLogoVue } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
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
];

const librariesFrameworks = [
  {
    skill: "PyTorch",
    icon: SiPytorch,
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
    skill: "React.js",
    icon: FaReact,
  },
  {
    skill: "Vue.js",
    icon: IoLogoVue,
  },
];

const devloperTools = [
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
];

const AllSkills = () => {
  const [showLanguages, setShowLanguages] = useState(true);
  const [showLibrariesFrameworks, setShowLibrariesFrameworks] = useState(false);
  const [showdevloperTools, setShowdevloperTools] = useState(false);

  const setLanguages = () => {
    setShowLanguages(true);
    setShowLibrariesFrameworks(false);
    setShowdevloperTools(false);
  };

  const setLibrariesFrameworks = () => {
    setShowLanguages(false);
    setShowLibrariesFrameworks(true);
    setShowdevloperTools(false);
  };

  const setdevloperTools = () => {
    setShowLanguages(false);
    setShowLibrariesFrameworks(false);
    setShowdevloperTools(true);
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
            ${
              showLanguages
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
            ${
              showLibrariesFrameworks
                ? "bg-gradient-to-r from-lightGrey to-black bg-gray-800 cursor-default hover:none border-darkGrey"
                : "border-cyan bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 hover:shadow-cyanShadow"
            }
            `}
        >
          Libraries/Frameworks
        </button>
        <button
          onClick={setdevloperTools}
          disabled={showdevloperTools}
          className={`w-32 sm:w-auto px-3 py-1 rounded-full text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-3 md:text-lg font-bold text-white border flex items-center gap-1 transition-all duration-500
            ${
              showdevloperTools
                ? "bg-gradient-to-r from-lightGrey to-black bg-gray-800 cursor-default hover:none border-darkGrey"
                : "border-cyan bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 hover:shadow-cyanShadow"
            }
            `}
        >
          Devloper Tools
        </button>
      </motion.div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 my-20">
        {showLanguages &&
          languages.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill text={item.skill} imgSvg={<item.icon />} />
            </motion.div>
          ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 my-20">
        {showLibrariesFrameworks &&
          librariesFrameworks.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill text={item.skill} imgSvg={<item.icon />} />
            </motion.div>
          ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 my-20">
        {showdevloperTools &&
          devloperTools.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill text={item.skill} imgSvg={<item.icon />} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default AllSkills;
