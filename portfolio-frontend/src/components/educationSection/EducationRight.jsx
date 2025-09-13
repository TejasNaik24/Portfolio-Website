import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ActivitiesSocieties = [
  { name: "Artificial Intelligence Club" },
  { name: "Code 4 Community" },
  { name: "Big Data Analytics Association" },
];

const EducationRight = () => {
  return (
    <div className="flex flex-col gap-5 h-full justify-center md:text-left text-center px-4 md:px-0 max-w-full md:max-w-[500px] lg:max-w-none">
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl sm:text-5xl md:text-[2.8rem] lg:text-5xl font-bold font-special text-orange mb-4 sm:mb-6 md:mb-8"
      >
        The Ohio State University
      </motion.h1>
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base sm:text-xl lg:text-2xl uppercase text-cyan -mt-5"
      >
        Bachelor of Science B.S. in Computer
        <br />
        Engineering
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base lg:text-xl text-lightGrey -mt-1"
      >
        Minors: Business, Robotics and Autonomous Systems
      </motion.p>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base lg:text-xl -mt-4"
      >
        May 2028
      </motion.p>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl lg:text-3xl text-lightRed"
      >
        Activities and Societies:
      </motion.p>
      <ul className="list-disc list-inside space-y-5 text-base lg:text-xl text-lightCyan -mt-2">
        {ActivitiesSocieties.map((item, index) => {
          return (
            <motion.li
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              {item.name}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default EducationRight;
