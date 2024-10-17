
// import { useEffect, useState } from "react";
// import type { Project as ProjectType } from "../Components/Types";
// import Project from "../Components/Projects";
// import Layout from "../Components/Layout";
// // import Navbar from "./Components/Navbar";
// import DeleteProject from "../Components/DeleteProject"


// function ProjectPage(){
//   const [projectData, setProjectData] = useState<ProjectType[]>([])

//   const handleRemoveProject = async (id: string) => {
// const newProjectData = projectData.map((project) => {
//   if (project.id === id) {
//     return { ...project, deleted: true}
//   }
//   return project
// })


// setProjectData(newProjectData)

// try {
//   const response = await fetch(
//     `http://localhost:3000/${encodeURI(id)}`,
//     {
//       method: "DELETE"
//     }
//   )
//   const data = await response.json()
//   setProjectData(data.data)
// } catch (error){
//   console.error("error removing data from server", error)
// }
//  }
// useEffect(() => {
//   const fetchData = async () =>{
//     try{
//       const response = await fetch("http://localhost:3000")
//       const data = await response.json()
//       setProjectData(data.data)
//     } catch(error){
//       console.error("error fetchig data from server", error)
//     }
//   }
//   fetchData()
// }, [])

// const createProjectData = async (project: ProjectType) => {
//   try{
//     const response = await fetch("http://localhost:3000", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(project),
//     })

//     if(response.status === 201){
//       const data = await response.json()
//       setProjectData(data.data)
//       console.log("Project added to server")
//     }
//   } catch (error){
//     console.error("error adding data to server:", error)
//   }
// }

// return(

//   <Layout>
//     <Project createProjectData={createProjectData} />
//   <DeleteProject projectData={projectData} handleRemoveProject={handleRemoveProject} />

//   </Layout>
// )

// }

// export default ProjectPage

import React from "react";
import Layout from "../Components/Layout";
import Project from "../Components/Projects";
import DeleteProject from "../Components/DeleteProject";
import useProjects from "../hooks/useProjects"; // Import the custom hook


//move just about all previous information into the useProjects hook :D
function ProjectPage() {
  const { projectData, handleRemoveProject, createProjectData } = useProjects()

  return (
    <Layout>
      <Project createProjectData={createProjectData} />
      
      <DeleteProject projectData={projectData} handleRemoveProject={handleRemoveProject} />
    </Layout>
  )
}

export default ProjectPage
