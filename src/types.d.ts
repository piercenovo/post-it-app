export interface PostType {
  id: string
  title: string
  createdAt: string
  user: {
    name: string
    image: string
  }
  comments?: {
    id: string
    createdAt: string
    postId: string
    userId: string
  }[]
}

export interface AuthPostsType {
  id: string
  name: string
  email: string
  image: string
  posts: PostType[]
}

export type ListOfPosts = PostType[]
export type ListOfPostsByUser = AuthPostsType
