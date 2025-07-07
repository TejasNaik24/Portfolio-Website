import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-orange text-3xl mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-white"
        >
          I'm always open to new opportunities, collaborations, or just a good
          conversation about tech and AI. Feel free to reach out through the
          form below — I’ll get back to you as soon as I can.
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default ContactMeLeft;
