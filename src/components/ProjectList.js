import React from "react";
import ProjectItem from "./ProjectItem";



function ProjectList({ projects }) {
  console.log(projects);
  
  const projectsList = projects.map((aproject)=>{
    console.log(aproject)

    return <ProjectItem key = {aproject.id} name={aproject.name}  about= {aproject.about} technologies = {aproject.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
    {projectsList}
      </div>
    </div>
  );
}

export default ProjectList;
