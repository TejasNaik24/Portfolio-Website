import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="w-full max-w-[880px] border-2 border-orange border-dashed rounded-2xl mt-12 p-4 flex flex-col gap-1 hover:bg-lightBrown bg-darkBrown transition-all duration-500">
        <div className="flex items-start gap-3">
          <img
            src={experience.icon}
            alt="Icon Image"
            className="w-14 h-14 object-contain mt-2"
          />
          <div className="flex flex-col text-left">
            <p className="font-bold text-2xl text-cyan">{experience.job}</p>
            <p className="text-orange text-lg">{experience.company}</p>
            <p className="text-lightGrey text-sm">{experience.date}</p>
          </div>
        </div>

        <ul className="list-disc pl-3">
          {experience.responsibilities.map((resp, index) => {
            return <li key={index}>{resp}</li>;
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
