
import React from 'react'
import { Post } from '@/components/Post'
import { type ListOfPosts } from '@/types'

interface PostListProps {
  posts: ListOfPosts,
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <>
      {posts?.map(post => (
        <Post
          key={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          id={post.id}
        />

      ))}
    </>
  )
}
