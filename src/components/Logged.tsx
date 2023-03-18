'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

interface LoggedProps {
  image: string
}

export function Logged ({ image } : LoggedProps) {
  return (
    <li className='flex gap-5 md:gap-6 items-center'>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className='
        bg-gray-700
        text-white
        text-sm
        px-6 py-2
        rounded-md
      '
      >
        Cerrar Sessión
      </button>
      <Link href='/dashboard'>
        <Image
          width={64}
          height={64}
          className='w-12 :w-14 rounded-full'
          src={image}
          alt='Profile image'
          priority
        />
      </Link>
    </li>
  )
}
