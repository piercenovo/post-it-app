import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-hot-toast'

interface props {
  id: string
}

export function useEditPost ({ id }: props) {
  const [toggle, setToggle] = useState(false)
  let deleteToastID: string
  const queryClient = useQueryClient()

  // Delete Post
  const { mutate } = useMutation(
    async (id: string) => await axios.delete('/api/posts/deletePost', { data: id }),
    {
      onError: (error) => {
        console.log(error)
        toast.error('Error deleting that post', { id: deleteToastID })
      },
      onSuccess: (data) => {
        toast.success('Post has been deleted.', { id: deleteToastID })
        queryClient.invalidateQueries(['auth-posts'])
      }
    }
  )

  const deletePost = () => {
    deleteToastID = toast.loading('Deleting your post.', { id: deleteToastID })
    mutate(id)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { setToggle(true) }

  return {
    toggle,
    handleClick,
    setToggle,
    deletePost
  }
}
