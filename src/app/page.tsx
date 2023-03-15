'use client'

import AddPost from '@/components/AddPost'
import { PostList } from '@/components/PostList'

export default function Home () {
  return (
    <div>
      <AddPost />
      <PostList />
    </div>
  )
}
