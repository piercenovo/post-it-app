import MyPosts from '@/components/MyPosts'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function Dashboard () {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <main>
      <h1 className='text-2xl font-bold'>
        Bienvenido de nuevo, {session?.user?.name}
      </h1>
      <MyPosts />
    </main>
  )
}
