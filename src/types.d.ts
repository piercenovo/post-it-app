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
  }
}

export type ListOfPosts = PostType[]
