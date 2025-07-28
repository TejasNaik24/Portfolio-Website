import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaGithub } from "react-icons/fa";
import { LuLink } from "react-icons/lu";

const SingleProject = ({ project }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="max-w-[900px] border-2 border-white rounded-2xl mt-2 p-4 flex flex-col hover:bg-lightBrown bg-darkBrown transition-all duration-500">
        <div className="flex items-start">
          <img
            src={project.image}
            alt="Project Image"
            className="w-24 h-24 object-contain -ml-2"
          />
          <div className="flex flex-col gap-2">
            <p className="md:text-3xl sm:text-2xl text-orange mt-3">
              {project.name}
            </p>
            <div className="flex gap-2">
              {project.techStack.map((Icon, index) => (
                <Icon key={index} className="text-2xl text-lightGrey" />
              ))}
            </div>
          </div>
        </div>

        <p className="text-xl font-thin font-special">{project.description}</p>

        <div className="flex gap-4 mt-2">
          <a
            href={project.demoLink}
            className="text-3xl flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
            target="_blank"
          >
            <LuLink />
          </a>
          <a
            href={project.gitHubLink}
            className="text-3xl flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
