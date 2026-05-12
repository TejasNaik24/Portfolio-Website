import PublicationsText from "./PublicationsText";
import AllPublications from "./AllPublications";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const PublicationsMain = () => {
  return (
    <div id="publications" className="max-w-[1200px] mx-auto px-4 mt-[100px]">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <PublicationsText />
      </motion.div>
      <AllPublications />
    </div>
  );
};

export default PublicationsMain;
