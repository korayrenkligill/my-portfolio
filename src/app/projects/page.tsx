import React from "react";
import projects from "@/json/projects.json";
import ProjectItem from "@/components/Common/ProjectItem";

const page = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {projects.map((item, key) => (
        <ProjectItem item={item} key={key} />
      ))}
    </div>
  );
};

export default page;
