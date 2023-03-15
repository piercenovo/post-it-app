import { useQuery } from '@tanstack/react-query'

import fetcher from '@/lib/fetcher'

export function usePostList () {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetcher('/api/posts/getPosts')
  })

  return { posts: data, error, isLoading }
}
