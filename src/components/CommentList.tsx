
import React from 'react'
import { Post } from '@/components/Post'
import { usePostList } from '@/hooks/usePostList'

export function CommentList () {
  const { posts, isLoading } = usePostList()

  if (isLoading) return <span className='text-center text-gray-600'>Loading...</span>
  return (
    <>
      {posts?.map(post => (
        <Post
          key={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          id={post.id}
          comments={post.comments}
        />

      ))}
    </>
  )
}
