import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'
import { projectSchema } from '../../lib/validations'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query

  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid project ID' })
  }

  if (req.method === 'PATCH') {
    try {
      const validation = projectSchema.partial().safeParse(req.body)
      
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid data', 
          details: validation.error.flatten() 
        })
      }

      const project = await prisma.project.update({
        where: { id },
        data: validation.data,
      })
      
      return res.status(200).json({ data: project })
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update project' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      await prisma.project.update({
        where: { id },
        data: { deleted: true },
      })
      
      return res.status(200).json({ message: 'Project deleted' })
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete project' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}