import type { NextApiRequest, NextApiResponse } from 'next'

import prismadb from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)
  if (!session) return res.status(401).json({ message: 'Please sign in' })

  // Get Auth Users Posts
  try {
    const data = await prismadb.user.findUnique({
      where: {
        email: session.user?.email!
      },
      include: {
        posts: {
          orderBy: {
            createdAt: 'desc'
          },
          include: {
            comments: true
          }
        }
      }
    })
    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` })
  }
}
