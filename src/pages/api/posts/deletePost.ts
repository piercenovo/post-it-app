import type { NextApiRequest, NextApiResponse } from 'next'

import prismadb from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)
  if (!session) return res.status(401).json({ message: 'Por favor inicia sesión' })

  // Delete a Post
  try {
    const postId = req.body

    const result = await prismadb.post.delete({
      where: {
        id: postId
      }
    })

    return res.status(200).json(result)
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` })
  }
}
