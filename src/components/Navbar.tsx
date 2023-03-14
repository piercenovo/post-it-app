import Link from 'next/link'
import { Login } from '@/components/Login'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import React from 'react'
import { Logged } from './Logged'

export async function Navbar () {
  const session = await getServerSession(authOptions)
  const user = session?.user

  return (
    <nav className='flex justify-between items-center py-5'>
      <Link href='/'>
        <h1 className='font-medium text-lg'>Post<span className='font-semibold'>It.</span></h1>
      </Link>
      <ul className='flex items-center gap-6'>
        {!user && <Login />}
        {user && <Logged image={user.image || ''} />}
      </ul>
    </nav>
  )
}
