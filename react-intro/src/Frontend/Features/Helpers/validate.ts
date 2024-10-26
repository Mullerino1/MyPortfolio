import { z } from "zod";

export {projectSchema, projectsSchema } 

const projectSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    createdAt: z.string().datetime(),
    categories: z.array(z.string()),
})

const projectsSchema = z.array(projectSchema)