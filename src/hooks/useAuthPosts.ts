import { useQuery } from '@tanstack/react-query'

import fetcher from '@/lib/fetcher'
import { type ListOfPostsByUser } from '@/types'

export function useAuthPosts () {
  const { data, error, isLoading } = useQuery<ListOfPostsByUser>({
    queryKey: ['auth-posts'],
    queryFn: () => fetcher('/api/posts/authPosts')
  })

  return { data, error, isLoading }
}
