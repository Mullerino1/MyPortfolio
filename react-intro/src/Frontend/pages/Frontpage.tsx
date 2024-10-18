
import { useEffect, useState } from "react";
import type { Project as ProjectType } from "../Components/Types";
// import Title from "./Components/Title";
import Layout from "../Components/Layout";
import Project from "../Components/Projects";
import useProjects from "../hooks/useProjects"; // Import the custom hook


function FrontPage(){
  const { projectData, createProjectData } = useProjects();


return(

  <Layout>
    
<main>
   <figcaption>
      <div className="container">
      <img src="src/Frontend/img/PFPIzumi.png" alt="Profile picture of an anime character" className="image"/>
      <div className="overlay">
        <img src="src/Frontend/img/Me.jpg" alt="Profile picture of an anime character" className="image_2" />
        </div>
      </div>
    </figcaption>
    <section>
    <ul>
        {projectData.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      </section>
      </main>

  </Layout>
)

}

export default FrontPage