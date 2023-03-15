'use client'

import { useAuthPosts } from '@/hooks/useAuthPosts'
import { EditPost } from './EditPost'

export default function MyPosts () {
  const { data, isLoading } = useAuthPosts()

  if (isLoading) return <span>Posts are loading...</span>
  return (
    <div>
      {data?.posts?.map(post => (
        <EditPost
          id={post.id}
          key={post.id}
          avatar={data.image}
          name={data.name}
          title={post.title}
          comments={post.comments}
        />
      ))}
    </div>
  )
}
