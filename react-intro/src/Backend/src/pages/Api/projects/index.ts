import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { projectSchema } from '../../../lib/validations'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const projects = await prisma.project.findMany({
        where: { deleted: false },
        orderBy: { createdAt: 'desc' },
      })
      return res.status(200).json({ data: projects })
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch projects' })
    }
  }

  if (req.method === 'POST') {
    try {
      const validation = projectSchema.safeParse(req.body)
      
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid data', 
          details: validation.error.flatten() 
        })
      }

      const project = await prisma.project.create({
        data: validation.data,
      })
      
      return res.status(201).json({ data: project })
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create project' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}