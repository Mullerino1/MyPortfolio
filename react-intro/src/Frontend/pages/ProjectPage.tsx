

import React from "react";
import Layout from "../Components/Layout";
import Project from "../Components/Projects";
import DeleteProject from "../Components/ProjectInfo";
import useProjects from "../hooks/useProjects"; // Import the custom hook
import '../Styling/ProjectPageS.scss'
import { useEffect, useState } from "react";
// import type { Project as ProjectType } from "../Components/Types";
import type { HandleProject, Project as ProjectType } from "../Components/Types"
import useProjectForm from "../hooks/useProjectForm";




//move just about all previous information into the useProjects hook :D
function ProjectPage() {
  const { remove, add, update, status, get, data, error } = useProjects()
  // const { fields, handleSubmit, getInputProjectProps, isFieldInvali } = useProjectForm

  const projects = data

  const handleProjectMutation: HandleProject = (props) => {
    const { action } = props;

    switch (action) {
      case "add":
        add(props.project);
        break;
      case "remove":
        remove(props.id);
        break;
      case "update":
        update(props.id, props.project);
        break;
      default:
        break;
    }
  };
  


  return (
    <Layout>
      
      <main>

        <section>
          {/* I could move the project file to be here instead of its own file so i dont have another step between all this but im not sure */}
        </section>
        <section className="column1">
      <Project createProjectData={createProjectData} />
      <DeleteProject projectData={projectData} handleRemoveProject={handleRemoveProject} />
      </section>
      </main>
    </Layout>
  )
}

export default ProjectPage
