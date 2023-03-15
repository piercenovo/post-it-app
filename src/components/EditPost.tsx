import Image from 'next/image'
import React from 'react'

type EditPostProps = {
  id: string
  avatar: string
  name: string
  title: string
  comments?: {
    id: string
    postId: string
    userId: string
  }[]
}

export const EditPost: React.FC<EditPostProps> = ({ avatar, name, title, comments, id }) => {
  return (
    <div className='bg-white my-6 p-6 lg:my-8 lg:p-8 rounded-md'>
      <div className='flex items-center gap-2'>
        <Image width={32} height={32} src={avatar} alt='avatar' className='rounded-full' />
        <h3 className='font-bold text-gray-700'>{name}</h3>
      </div>
      <div className='my-6'>
        <p className='break-all'>{title}</p>
      </div>
      <div className='flex items-center gap-4'>
        <p className='text-sm font-bold text-gray-700'>
          {comments?.length} Comments
        </p>
      </div>
    </div>
  )
}
