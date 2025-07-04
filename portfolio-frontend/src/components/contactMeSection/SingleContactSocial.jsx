import React from "react";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center ">
      <a
        href={link}
        className=" hover:text-cyan transition-all duration-500 cursor-pointer"
      >
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
