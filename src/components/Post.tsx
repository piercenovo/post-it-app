'use client'

import Image from 'next/image'
import React from 'react'

interface PostProps {
  id: string
  avatar: string,
  postTitle: string,
  name: string,
}

export const Post: React.FC<PostProps> = ({ avatar, postTitle, name, id }) => {
  return (
    <div className='bg-white my-8 p-8 rounded-md'>
      <div className='flex items-center gap-2'>
        <Image
          className='rounded-full'
          width={32}
          height={32}
          src={avatar}
          alt='Avatar'
        />
        <h3 className='font-bold text-gray-700'>{name}</h3>
      </div>
      <div className='mt-8 mb-2'>
        <p className='break-all'>{postTitle}</p>
      </div>
    </div>
  )
}
