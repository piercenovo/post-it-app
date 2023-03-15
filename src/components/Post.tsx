'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PostProps {
  id?: string,
  avatar: string,
  postTitle: string,
  name: string,
  comments?: any
}

export const Post: React.FC<PostProps> = ({ avatar, postTitle, name, id, comments }) => {
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
      <div className='mt-8 mb-6'>
        <p className='break-all'>{postTitle}</p>
      </div>
      <div className='flex gap-4 cursor-pointer items-center'>
        <Link href={`/post/${id}`}>
          <p className='text-sm font-bold text-gray-700'>
            {comments?.length} Comments
          </p>
        </Link>
      </div>
    </div>
  )
}
