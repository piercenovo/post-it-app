'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PostProps {
  id: string,
  avatar: string,
  postTitle: string,
  name: string,
  comments?: {
    id: string
    postId: string
    userId: string
  }[]
}

export const Post: React.FC<PostProps> = ({ avatar, postTitle, name, comments, id }) => {
  return (
    <div className='bg-white my-6 p-6 lg:my-8 lg:p-8 rounded-md'>
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
      <div className='mt-6 mb-4 lg:mt-8 lg:mb-6'>
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
