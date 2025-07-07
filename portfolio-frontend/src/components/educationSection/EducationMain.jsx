import EducationText from "./EducationText";
import EducationLeft from "./EducationLeft";
import EducationRight from "./EducationRight";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const EducationMain = () => {
  return (
    <div id="education" className="max-w-screen-2xl mx-auto px-6">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <EducationText />
      </motion.div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-14 gap-y-8 md:gap-x-36 lg:gap-x-48 xl:gap-x-64 2xl:gap-x-96 pl-36">
        <EducationLeft />
        <EducationRight />
      </div>
    </div>
  );
};

export default EducationMain;
