// import './Styling/Styling.scss'
// import { useState, useEffect } from 'react'
// import Welcome from './Components/Welcome'
// import React from 'react'
// import Projects from './Components/Projects'
// import { ofetch } from 'ofetch'
// import type { Action, Project as ProjectType} from "./Components/Types"
// import projectApi from "./Components/api"


// const user = {
//   name: "Mullerino",
//   age: 20,
// }

// function App() {

// const [projects, setProjects ] = useState<ProjectType[]>([])

// useEffect(() => {
//   const initializeData = async () => {
//     try {
//       console.log("fetching data")
//       const projectPromise = projectApi.list()
//       const data = ofetch("http://localhost:3001/data")

//       const [projects] = await Promise.all([
//         projectPromise,
//       ])
//       console.log("data fetched", projects)
//       setProjects(projects.data ?? [])
//       console.log(" data initialized ")
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   initializeData()
// }, [])

// const add = (project: ProjectType) => {
//   setProjects((prev) => [...prev, project])
// }

// const remove = (id: string) => {
//   setProjects((prev) => prev.filter((project) => project.id !== id))
// }


//   const ProjectMutationHandlers = (action: Action, project: ProjectType) => {
//     switch (action) {
//       case 'add':
//       add(project)
//       break;
//       case 'remove':
//       remove(project.id)
//       break
//       default:
//       break

//     }
//   }



//   return(
    
//     <main>
//       <Welcome user = {user} />
//       <Projects projects={projects} ProjectMutationHandlers={ProjectMutationHandlers}/>
//     </main>

//   )
// }

// export default App;

import { useEffect, useState } from "react";
import type { Project as ProjectType } from "./Components/Types";
import Project from "./Components/Projects";

function App(){
  const [projectData, setProjectData] = useState<ProjectType[]>([])

  const handleRemoveProject = async (title: string) => {
const newProjectData = projectData.map((project) => {
  if (project.title === title) {
    return { ...project, deleted: true}
  }
  return project
})


setProjectData(newProjectData)

try {
  const response = await fetch(
    `http://localhost:3001/${encodeURI(title)}`,
    {
      method: "DELETE"
    }
  )
  const data = await response.json()
  setProjectData(data.data)
} catch (error){
  console.error("error removing data from server", error)
}
 }
useEffect(() => {
  const fetchData = async () =>{
    try{
      const response = await fetch("http://localhost:3001")
      const data = await response.json()
      setProjectData(data.data)
    } catch(error){
      console.error("error fetchig data from server", error)
    }
  }
  fetchData()
}, [])

const createProjectData = async (project: ProjectType) => {
  try{
    const response = await fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project)
    })

    if(response.status === 201){
      const data = await response.json()
      setProjectData(data.data)
      console.log("Project added to server")
    }
  } catch (error){
    console.error("error adding data to server:", error)
  }
}

return(
  <>
  <Project createProjectData={createProjectData} />
  </>
)

}

export default App