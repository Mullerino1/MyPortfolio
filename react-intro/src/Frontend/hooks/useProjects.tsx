import { useEffect, useState } from "react";
import type { Project as ProjectType } from "../Components/Types";

export default function useProjects() {
  const [projectData, setProjectData] = useState<ProjectType[]>([])

  // Function to remove a project
  const handleRemoveProject = async (id: string) => {
    const newProjectData = projectData.map((project) => {
      if (project.id === id) {
        return { ...project, deleted: true }
      }
      return project
    })

    setProjectData(newProjectData)

    try {
      const response = await fetch(`http://localhost:3000/${encodeURI(id)}`, {
        method: "DELETE",
      })
      const data = await response.json()
      setProjectData(data.data)
    } catch (error) {
      console.error("Error removing data from server", error)
    }
  }

  // Fetch project data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000")
        const data = await response.json()
        setProjectData(data.data)
      } catch (error) {
        console.error("Error fetching data from server", error)
      }
    }
    fetchData()
  }, [])

  // Function to create a new project
  const createProjectData = async (project: ProjectType) => {
    try {
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      })

      if (response.status === 201) {
        const data = await response.json()
        setProjectData(data.data)
        console.log("Project added to server")
      }
    } catch (error) {
      console.error("Error adding data to server:", error)
    }
  }

  //here we have just about the main change from when it was in a component until what it is now! nice!
  return {
    projectData,
    setProjectData,
    handleRemoveProject,
    createProjectData,
  }
}
