import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SinglePublication = ({ publication }) => {
  // Bold "Tejas Naik" in the authors string
  const renderAuthors = (authorsString) => {
    if (!authorsString) return null;
    const parts = authorsString.split("Tejas Naik");
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}<span className="font-bold text-cyan">Tejas Naik</span>{parts[1]}
        </>
      );
    }
    return authorsString;
  };

  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="w-full border-b-[0.5px] border-lightGrey/30 pb-8 mb-2 text-left">
        <h3 className="font-bold text-2xl text-cyan mb-2">{publication.title}</h3>
        <p className="text-lightGrey text-md mb-2">{renderAuthors(publication.authors)}</p>
        <p className="text-orange text-sm italic mb-4">{publication.venue}</p>
        
        {publication.description && (
          <p className="text-white text-sm mb-6 leading-relaxed">
            {publication.description}
          </p>
        )}
        
        <div className="flex gap-4">
          <a href={publication.links.pdf} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan transition-colors text-sm underline underline-offset-4 decoration-cyan/50">
            [Paper]
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SinglePublication;
