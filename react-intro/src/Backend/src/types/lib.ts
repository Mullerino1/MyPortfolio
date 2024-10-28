import{ readFile, writeFile } from "node:fs/promises"
import type { ToProjectDomain, Project } from "."

export async function getParsedData() {
    const data = await readFile("./static/data.json", "utf-8")
    const parsedData = JSON.parse(data) as ToProjectDomain[]
    return parsedData.map(toDomain)
}



export async function updateProjectData(newData: Project[]){
    const data = newData.map(projectToJSON)
    console.log("success updateProjectData")
    await writeFile("./static/data.JSON", JSON.stringify(data, null, 2))
}

export function projectToJSON(data: Project){
    return{
        ...data,
        ...(data.deleted && { deleted: "true"}),
        // ...(data.public && { public: "true"}),
        // ...(data.status && { status: "true"}),

    }
}

export function toDomain(data: Project & { deleted?: "true"}){
    return {
        ...data,
        ...(data.deleted === "true" && {deleted: true}),
        // ...(data.public === "true" && {public: true}),
        // ...(data.status === "true" && {status: true}),
    }
}