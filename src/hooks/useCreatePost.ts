import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'

export function useCreatePost () {
  const [title, setTitle] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const queryClient = useQueryClient()
  let toastPostID: string

  const handleChange = (event: any) => {
    setTitle(event.target.value)
  }

  // Create a post
  const { mutate } = useMutation(
    async (title: string) =>
      await axios.post('/api/posts/addPost', {
        title
      }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: toastPostID })
        }
        setIsDisabled(false)
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(['posts'])
        toast.success('Post has been made 🔥', { id: toastPostID })
        setTitle('')
        setIsDisabled(false)
      }
    }
  )
  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsDisabled(true)
    toastPostID = toast.loading('Creating your post', { id: toastPostID })
    mutate(title)
  }

  return {
    isDisabled,
    title,
    handleChange,
    submitPost
  }
}
