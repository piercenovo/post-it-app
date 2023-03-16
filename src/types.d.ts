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
    message: string
    user: {
      email: string
      id: string
      image: string
      name: string
    }
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
