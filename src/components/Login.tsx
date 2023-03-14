'use client'

import { signIn } from 'next-auth/react'

export function Login () {
  return (
    <li className='list-none'>
      <button
        onClick={() => signIn()}
        className='
          text-sm
          bg-gray-700
          text-white
          px-6 py-2
          rounded-md
          disabled:opacity-25
        '
      >
        Sign In
      </button>
    </li>
  )
}
