import ResearchText from "./ResearchText";
import AllResearch from "./AllResearch";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ResearchMain = () => {
  return (
    <div id="research" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ResearchText />
      </motion.div>
      <AllResearch />
    </div>
  );
};

export default ResearchMain;
