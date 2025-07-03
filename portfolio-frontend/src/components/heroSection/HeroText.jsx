import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">
        Aspiring AI/ML Engineer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">
        Tejas Naik
      </h1>
      <p className="text-lg mt-4 text-white">
        I'm a curious and passion-driven developer from Orlando, FL
        <br />
        with a strong interest in artificial intelligence, machine learning,
        <br />
        and software engineering — and a growing curiosity for full-stack
        <br />
        development.
      </p>
    </div>
  );
};

export default HeroText;
