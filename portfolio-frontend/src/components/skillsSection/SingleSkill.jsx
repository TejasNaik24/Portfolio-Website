import React from "react";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 relative">
        <div
          className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full 
                        hover:text-darkGrey hover:scale-105 hover:-translate-y-10 transform transition-all duration-500 
                        text-6xl border-4 border-orange"
        >
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
