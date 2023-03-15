export interface Post {
  id: string
  title: string
  user: {
    name: string
    image: string
  }
}

export type ListOfPosts = Post[]
