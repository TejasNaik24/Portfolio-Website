import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleResearch = ({ research }) => {
  const isMultiRole = research.roles && research.roles.length > 1;

  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="w-full border-2 border-orange border-dashed rounded-2xl p-6 hover:bg-lightBrown bg-darkBrown transition-all duration-500">
        
        {isMultiRole ? (
          <>
            {/* Company Header for Multi-role */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={research.icon}
                alt={`${research.company} logo`}
                className="w-14 h-14 object-contain"
              />
              <h2 className="font-bold text-2xl text-orange text-left">{research.company}</h2>
            </div>

            {/* Roles Timeline */}
            <div className="relative pl-6 border-l-2 border-lightGrey/50 ml-[27px]">
              {research.roles.map((role, index) => (
                <div key={index} className="relative mb-8 last:mb-0">
                  {/* Timeline dot */}
                  <span className="absolute -left-[33px] top-1.5 w-4 h-4 bg-cyan rounded-full"></span>
                  
                  <div className="flex flex-col text-left">
                    <p className="font-bold text-xl text-cyan">{role.title}</p>
                    <p className="text-lightGrey text-sm mb-3">{role.date}</p>
                  </div>

                  <ul className="list-disc pl-4 text-white text-sm space-y-2 text-left">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Standard layout for Single-role */}
            <div className="flex items-start gap-3">
              <img
                src={research.icon}
                alt={`${research.company} logo`}
                className="w-14 h-14 object-contain mt-2"
              />
              <div className="flex flex-col text-left">
                <p className="font-bold text-2xl text-cyan">{research.roles[0].title}</p>
                <p className="text-orange text-lg">{research.company}</p>
                <p className="text-lightGrey text-sm">{research.roles[0].date}</p>
              </div>
            </div>

            <ul className="list-disc pl-3 mt-4 text-white text-sm space-y-2 text-left">
              {research.roles[0].responsibilities.map((resp, index) => {
                return <li key={index}>{resp}</li>;
              })}
            </ul>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default SingleResearch;
