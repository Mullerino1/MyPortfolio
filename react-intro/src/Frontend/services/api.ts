
import { endpoints } from "../config/urls";
// import { validateProject } from "../Features/Helpers/validate";
import type { Project } from "../Components/Types"
import { validateProject } from "../Features/Helpers/validate";

const url = endpoints

const remove = async (id: string) => {
  try {
    const removeProject = await fetch(`${url}/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
    if (!removeProject.ok) throw new Error("failed to remove project")

  } catch (error) {
    console.error(error)
    throw error
  }
}

const create = async (data: Pick<Project, "title">) => {
  try {
    const createdProject = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    if (!createdProject.ok) throw new Error("failed to create project")

    return await createdProject.json()
  } catch (error) {
    console.error(error)
  }
}

const list = async () => {
    try {
        const fetchProjects = await fetch(url, {
            credentials: "include",
        })
        if (!fetchProjects.ok) throw new Error("failed to fetch projects")
        const projects = await fetchProjects.json()
        return validateProject(projects.data)
    } catch (error) {
        console.log(error)
    }
}

const listProjects = async (): Promise <{
    data: (Project & {projects: Project[]}) []
}> => {
    try {
        const response = await fetch(url, {
            credentials: "include",
        })
        if(!response.ok) throw new Error("Failed to fetch projects")
            const projectData = await response.json()
        const projects = validateProject(projectData.data)

        if (!projects.success) return {data: []}
        const data = await Promise.all(
            projects.data.map(async (project) => {
                const projectResponse = await fetch(`${url}/${project.id}/projects`, {
                    credentials: "include",
                })
                if (!projectResponse.ok) throw new Error("failed to fetch projects")
                    return await projectResponse.json()
            })
        )
        return { data}
    } catch (error){
    console.error(error)
    return { data: []}
    }
}


const update = async (id: string, data: Partial<Project>) => {
  try {
    const updateProject = await fetch(`${url}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    if (!updateProject.ok) throw new Error("failed to update project")

  } catch (error) {
    console.error(error)
  }
}

export default { remove, create, update, list, listProjects }