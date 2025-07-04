import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-6xl text-cyan mb-10 text-center"
      >
        Contact Me
      </motion.h2>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
