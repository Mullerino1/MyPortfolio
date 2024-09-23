import './Styling/Styling.scss'
import { useState, useEffect } from 'react'
import Welcome from './Components/Welcome'
import React from 'react'
import Projects from './Components/Projects'
import { ofetch } from 'ofetch'
import type { Action, Project as ProjectType} from "./Components/Types"
import projectApi from "./Components/api"


const user = {
  name: "Mullerino",
  age: 20,
}

function App() {

const [projects, setProjects ] = useState<ProjectType[]>([])

useEffect(() => {
  const initializeData = async () => {
    try {
      console.log("fetching data")
      const projectPromise = projectApi.list()
      const data = ofetch("http://localhost:3000/projects")

      const [projects] = await Promise.all([
        projectPromise,
      ])
      console.log("data fetched", projects)
      setProjects(projects.data ?? [])
      console.log(" data initialized ")
    } catch (error) {
      console.error(error)
    }
  }
  initializeData()
}, [])

const add = (project: ProjectType) => {
  setProjects((prev) => [...prev, project])
}

const remove = (id: string) => {
  setProjects((prev) => prev.filter((project) => project.id !== id))
}


  const ProjectMutationHandlers = (action: Action, project: ProjectType) => {
    switch (action) {
      case 'add':
      add(project)
      break;
      case 'remove':
      remove(project.id)
      break
      default:
      break

    }
  }



  return(
    
    <main>
      <Welcome user = {user} />
      <Projects projects={projects} ProjectMutationHandlers={ProjectMutationHandlers}/>
    </main>

  )
}

export default App;