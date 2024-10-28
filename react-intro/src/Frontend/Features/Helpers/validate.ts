import { z } from "zod";

export {projectSchema, projectsSchema } 

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string().datetime(),
    public: z.boolean(),
    deleted: z.boolean(),
    tags: z.array(z.string()),
    createdAt: z.string().datetime(),
    updatedAt: z.string(),
    // dateDay: z.number(),
    // dateMonth: z.number(),
    // dateYear: z.number()
    // date: z.string()
    
})

const projectsSchema = z.array(projectSchema)

export function validateProject(data: unknown) {
    return projectsSchema.safeParse(data)
}