import type { NextApiRequest, NextApiResponse } from 'next'

import prismadb from '@/lib/prismadb'
import serverAuth from '@/lib/serverAuth'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { title } = req.body
  const maxLengthTitle = title.length > 300
  const minLengthTitle = !title.length

  // Check title
  if (maxLengthTitle) {
    return res.status(403).json({ message: 'Please write a shorter post' })
  }
  if (minLengthTitle) {
    return res.status(403).json({ message: 'Please do not leave this empty' })
  }

  // Create Post
  try {
    const { currentUser } = await serverAuth(req, res)

    const result = await prismadb.post.create({
      data: {
        title,
        useId: currentUser.id
      }
    })
    return res.status(200).json(result)
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` })
  }
}
