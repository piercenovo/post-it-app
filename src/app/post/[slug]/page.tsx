'use client'

import AddComment from '@/components/AddComment'
import { Post } from '@/components/Post'
import { usePostDetail } from '@/hooks/usePostDetail'
import parseDate from '@/utils/parseDate'
import Image from 'next/image'

type URL = {
  params: {
    slug: string
  }
  searchParams: string
}

export default function PostDetail (url: URL) {
  const { data, isLoading } = usePostDetail(url)

  if (isLoading) return <span className='text-center text-gray-600'>Cargando post...</span>

  return (
    <div>
      <Post
        id={data?.id!}
        name={data?.user.name!}
        avatar={data?.user.image!}
        postTitle={data?.title!}
        comments={data?.comments}
      />
      <AddComment id={data?.id} />
      {data?.comments?.map(comment => (
        <div
          className=' bg-white my-6 p-6 lg:my-8 lg:p-8 rounded-md'
          key={comment.id}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Image
                width={24}
                height={24}
                src={comment.user?.image}
                alt={`User avatar ${comment.user?.name}`}
                className='rounded-full'
              />
              <h3 className='font-bold'>{comment?.user?.name}</h3>
            </div>
            <h2 className='text-[0.80rem] text-gray-400'>{parseDate(comment?.createdAt)}</h2>
          </div>
          <p className='pt-4 text-sm'>{comment.message}</p>
          <div />
        </div>
      ))}
    </div>
  )
}
