import React from "react";

const SingleProject = ({ name }) => {
  return (
    <div className="flex w-full sm:flex-col-reverse items-center gap-8 justify-end">
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2 className="text-xl font-thin text-white font-special sm:text-center">
          year
        </h2>
        <a
          href=""
          className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center"
        >
          View
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img alt="cool" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SingleProject;
