import { useQuery } from '@tanstack/react-query'

import { PostType } from '@/types'
import axios from 'axios'

type URL = {
  params: {
    slug: string
  }
}

// Fetch All posts
const fetchDetails = async (slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`)
  return response.data
}

export function usePostDetail (url: URL) {
  const { data, isLoading } = useQuery<PostType>({
    queryKey: ['detail-post'],
    queryFn: () => fetchDetails(url.params.slug)
  })

  return { data, isLoading }
}
