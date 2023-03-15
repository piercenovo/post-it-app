'use client'

import AddPost from '@/components/AddPost'
import { PostList } from '@/components/PostList'
import { usePostList } from '@/hooks/usePostList'

export default function Home () {
  const { posts, error, isLoading } = usePostList()

  if (error) return error
  if (isLoading) return <span>Loading...</span>
  console.log(posts)
  return (
    <div>
      <AddPost />
      <PostList posts={posts} />
    </div>
  )
}
