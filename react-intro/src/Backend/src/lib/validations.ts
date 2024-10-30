import { z } from 'zod'

export const projectSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(5, 'Description must be at least 5 characters'),
  publishedAt: z.string().datetime().nullable(),
  visibility: z.enum(['public', 'private']),
  status: z.enum(['new', 'paused', 'finished']),
  deleted: z.boolean().default(false),
  categories: z.array(z.string()).default([]),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
})

export type ProjectCreate = z.infer<typeof projectSchema>