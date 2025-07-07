import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <div className="relative translate-y-[30px] flex items-center justify-center">
        <img
          src="./main.png"
          alt="Tejas Naik Image"
          className="max-h-[400px]  translate-x-[-2px] w-auto"
        />
        <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
