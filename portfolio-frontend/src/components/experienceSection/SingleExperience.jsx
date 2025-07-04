import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-full max-w-[880px] border-2 border-orange border-dashed rounded-2xl mt-12 p-4 flex gap-4 items-start"
    >
      <img
        src={experience.icon}
        alt="Icon Image"
        className="w-12 h-12 object-contain mt-1"
      />
      <div className="flex flex-col">
        <p className="font-bold text-cyan">{experience.job}</p>
        <p className="text-orange">{experience.company}</p>
        <p className="text-lightGrey">{experience.date}</p>
        <ul className="list-disc mt-4 pl-4 text-white">
          {experience.responsibilities.map((resp, index) => {
            return <li key={index}>{resp}</li>;
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
