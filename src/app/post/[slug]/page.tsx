'use client'

import AddComment from '@/components/AddComment'
import { Post } from '@/components/Post'
import { usePostDetail } from '@/hooks/usePostDetail'

type URL = {
  params: {
    slug: string
  }
  searchParams: string
}

export default function PostDetail (url: URL) {
  const { data, isLoading } = usePostDetail(url)

  if (isLoading) return <span>Loading post...</span>

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
    </div>
  )
}
