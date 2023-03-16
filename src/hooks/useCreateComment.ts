import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'

type PostProps = {
  id?: string
}

type Comment = {
  postId?: string
  title: string
}

export function useCreateComment ({ id }: PostProps) {
  const [title, setTitle] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const queryClient = useQueryClient()
  let toastCommentID: string

  const handleChange = (event: any) => {
    setTitle(event.target.value)
  }

  // Create a comment
  const { mutate } = useMutation(
    async (data: Comment) =>
      await axios.post('/api/posts/addComment', {
        data
      }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: toastCommentID })
        }
        setIsDisabled(false)
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(['detail-post'])
        toast.success('Added your comment', { id: toastCommentID })
        setTitle('')
        setIsDisabled(false)
      }
    }
  )
  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsDisabled(true)
    toastCommentID = toast.loading('Adding your comment', { id: toastCommentID })
    mutate({ title, postId: id })
  }

  return {
    isDisabled,
    title,
    submitComment,
    handleChange
  }
}
