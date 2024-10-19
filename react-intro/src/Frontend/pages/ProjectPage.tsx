

import React from "react";
import Layout from "../Components/Layout";
import Project from "../Components/Projects";
import DeleteProject from "../Components/DeleteProject";
import useProjects from "../hooks/useProjects"; // Import the custom hook
import '../Styling/ProjectPageS.scss'




//move just about all previous information into the useProjects hook :D
function ProjectPage() {
  const { projectData, handleRemoveProject, createProjectData } = useProjects()

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
