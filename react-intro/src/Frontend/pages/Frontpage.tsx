
import React, { useEffect, useState } from "react";
// import Layout from "../Components/Layout";
import Project from "../Components/Projects";
// import DeleteProject from "../Components/ProjectInfo";
import useProjects from "../hooks/useProjects"; // Import the custom hook
import '../Styling/FrontPageS.scss';
import type { HandleProject, Project as ProjectType } from "../Components/Types";
// import useProjectForm from "../hooks/useProjectForm";



export default function ProjectPage() {
  const { add, remove, update, status, get, data, error } = useProjects()
  const projects = data
  

  const handleProjectMutation: HandleProject = (props) => {
    const { action } = props

    switch (action) {
      case "add":
        add(props.project)
        break
      case "remove":
        remove(props.id)
        break
      case "update":
        update(props.id, props.project)
        break
      default:
        break
    }
  }



  if (status.loading) return <p>Laster ...</p>
  if (status.error) return <p className="error">{error}</p>

  return (
    <>
    <main>
   
  

    <Project
        projects={projects}
        handleProjectMutation={handleProjectMutation}
        
      >
         <figcaption>
      <div className="container">
      <img src="src/Frontend/img/PFPIzumi.png" alt="Profile picture of an anime character" className="image"/>
      <div className="overlay">
        <img src="src/Frontend/img/Me.jpg" alt="Profile picture of an anime character" className="image_2" />
        </div>
      </div>
    </figcaption>
      </Project>
     
    </main>
      
    </>
  )
}

