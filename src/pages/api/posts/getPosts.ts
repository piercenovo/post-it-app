import type { NextApiRequest, NextApiResponse } from 'next'

import prismadb from '@/lib/prismadb'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  // Fetch all posts
  try {
    const posts = await prismadb.post.findMany({
      include: {
        user: true,
        comments: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return res.status(200).json(posts)
  } catch (error) {
    return res.status(403).json({ error: `Something went wrong: ${error}` })
  }
}
