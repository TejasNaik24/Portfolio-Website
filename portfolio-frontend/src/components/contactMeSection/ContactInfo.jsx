import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <SingleInfo text="naik.tejas11@gmail.com" Image={HiOutlineMail} />
      </motion.div>

      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <SingleInfo text="+1 (614) 551-6795" Image={FiPhone} />
      </motion.div>

      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <SingleInfo text="Orlando, Florida" Image={IoLocationOutline} />
      </motion.div>
    </div>
  );
};

export default ContactInfo;
