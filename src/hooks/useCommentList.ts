import { useQuery } from '@tanstack/react-query'

import fetcher from '@/lib/fetcher'
import { type ListOfPosts } from '@/types'

export function useCommentList () {
  const { data, error, isLoading } = useQuery<ListOfPosts>({
    queryKey: ['posts'],
    queryFn: () => fetcher('/api/posts/getPosts')
  })

  return { posts: data, error, isLoading }
}
