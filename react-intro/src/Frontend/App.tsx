
import { useEffect, useState } from "react";
import type { Project as ProjectType } from "./Components/Types";
import Project from "./Components/Projects";
import Title from "./Components/Title";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
// import Welcome from "./Components/Welcome";
import DeleteProject from "./Components/DeleteProject"


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
    `http://localhost:3000/${encodeURI(title)}`,
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
      const response = await fetch("http://localhost:3000")
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
    const response = await fetch("http://localhost:3000", {
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

  <Layout>
    
  <DeleteProject projectData={projectData} handleRemoveProject={handleRemoveProject} />
   <figcaption>
      <div className="container">
      <img src="src/Frontend/img/PFPIzumi.png" alt="Profile picture of an anime character" className="image"/>
      <div className="overlay">
        <img src="src/Frontend/img/Me.jpg" alt="Profile picture of an anime character" className="image_2" />
        </div>
      </div>
    </figcaption>
  <Project createProjectData={createProjectData} />
  </Layout>
)

}

export default App