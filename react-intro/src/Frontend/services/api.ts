
import { endpoints } from "../config/urls";
import { validateProject } from "../Features/Helpers/validate";
import type { Project } from "../Components/Types"

const url = endpoints

const remove = async (id: string) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

const create = async (data: Pick<Project, "title">) => {
  try {
    const createdProject = await fetch(url, {
      method: "POST",
      body: data,
      credentials: "include",
    })

    return createdProject;
  } catch (error) {
    console.error(error);
  }
}

const list = async () => {
  try {
    const project = await fetch(url, {
      credentials: "include",
      //retry: 0,
    })
    // console.log(habitsSchema.safeParse(habits.data));
    return validateProject(project.data)
  } catch (error) {
    console.error(error)
  }
}


const update = async (id: string, data: Partial<Project>) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "PATCH",
      body: data,
      credentials: "include",
    })
  } catch (error) {
    console.error(error)
  }
}

export default { remove, create, list, update }