'use client'

import { useCreatePost } from '@/hooks/useCreatePost'

export default function AddPost () {
  const { isDisabled, title, handleChange, submitPost } = useCreatePost()

  return (
    <form onSubmit={submitPost} className='bg-white my-6 p-6 lg:my-8 lg:p-8 rounded-md'>
      <div className='flex flex-col mb-4 mt-2'>
        <textarea
          onChange={handleChange}
          name='title'
          value={title}
          placeholder='¿Qué tienes en mente?'
          className='
            p-4
            rounded-md
            mb-2
            bg-gray-200
            outline-sky-600
            transition
        '
        />
      </div>
      <div className='flex items-center justify-between gap-2'>
        <p className={`font-bold text-sm ${title.length > 300 ? 'text-red-700' : 'text-gray-700'}`}>
          {`${title.length}/300`}
        </p>
        <button
          disabled={isDisabled}
          className='
            text-sm
            bg-sky-600
            text-white
            px-4 lg:px-5 py-2
            rounded-md
            disabled:opacity-25
            hover:bg-sky-700
            transition
          '
          type='submit'
        >
          Crear un post
        </button>
      </div>
    </form>
  )
}
