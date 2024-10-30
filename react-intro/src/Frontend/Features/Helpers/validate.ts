import { z } from "zod";

export {projectSchema, projectsSchema } 

const projectSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    publishedAt: z.string().datetime(),
    visibility: z.string(),
    status: z.string(),
    deleted: z.boolean(),
    categories: z.array(z.string()),
    createdAt: z.string().datetime(),
    updatedAt: z.string(),
    
})

const projectsSchema = z.array(projectSchema)

export function validateProject(data: unknown) {
    return projectsSchema.safeParse(data)
}