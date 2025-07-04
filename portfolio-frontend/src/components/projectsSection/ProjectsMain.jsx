import React from "react";
import SingleProject from "./SingleProject";
import ProjectsText from "./ProjectsText";

const projects = [
  {
    name: "hi",
  },
  {
    name: "project",
  },
  {
    name: "project1",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return <SingleProject key={index} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
