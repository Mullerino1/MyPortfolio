import { ofetch } from "ofetch";
import type { Project } from "./Types";

const baseUrl = "http://localhost:3000"
const projectUrl = `${baseUrl}/projects`

const remove = async (project: Project) => {
    try {
        await ofetch(`${projectUrl}/${project.id}`, {
            method: "DELETE",
        })
    } catch (error) {
        console.error(error)
    }
}

const create = async (data: Pick<Project, "title" | "description" | "createdAt">) => {
    try {
        const createProject = await ofetch(projectUrl, {
            method: "POST",
            body: data,
        })
        return createProject
    } catch (error) {
        console.error(error)
    }
}

const list = async () => {
    try {
        const projects = await ofetch(projectUrl)
        return projects
    } catch (error) {
        console.error(error)
    }
}

export default { remove, create, list}