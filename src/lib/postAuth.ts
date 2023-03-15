import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

export const postAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ message: 'Please signin to create a post.' })
  }

  return { session }
}
