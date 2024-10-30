
import React, { useEffect, useState } from "react";
// import Layout from "../Components/Layout";
import Project from "../Components/Projects";
// import DeleteProject from "../Components/ProjectInfo";
import useProjects from "../hooks/useProjects"; // Import the custom hook
import '../Styling/ProjectPageS.scss';
import type { HandleProject, Project as ProjectType } from "../Components/Types";
// import useProjectForm from "../hooks/useProjectForm";
// import ProjectForm from "../Components/ProjectInfo";



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
    
      <Project
        projects={projects}
        handleProjectMutation={handleProjectMutation}
        
      >
      </Project>
    </>
  )
}

