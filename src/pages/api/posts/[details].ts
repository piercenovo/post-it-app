import type { NextApiRequest, NextApiResponse } from 'next'

import prismadb from '@/lib/prismadb'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  // Get Detail of Post
  try {
    const { details } = req.query

    if (typeof details !== 'string') {
      throw new Error('Invalid ID')
    }

    if (!details) {
      throw new Error('Invalid ID')
    }

    const data = await prismadb.post.findUnique({
      where: {
        id: details
      },
      include: {
        user: true,
        comments: {
          orderBy: {
            createdAt: 'desc'
          },
          include: {
            user: true
          }
        }
      }
    })
    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` })
  }
}
