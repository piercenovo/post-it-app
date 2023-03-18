import { useCreateComment } from '@/hooks/useCreateComment'

type PostProps = {
  id?: string
}

export default function AddComment ({ id }: PostProps) {
  const { isDisabled, title, handleChange, submitComment } = useCreateComment({ id })

  return (
    <form onSubmit={submitComment} className='my-8'>
      <h3>Agregar un comentario</h3>
      <div className='flex flex-col my-2'>
        <input
          onChange={handleChange}
          value={title}
          type='text'
          name='title'
          className='p-4 rounded-md my-2 outline-sky-600'
        />
      </div>
      <div className='flex items-center gap-2'>
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
          Agregar comentario 🚀
        </button>
        <p
          className={
          `
          font-bold ${title.length > 300 ? 'text-red-700' : 'text-gray-700'}
          `
        }
        >
          {`${title.length}/300`}
        </p>
      </div>
    </form>
  )
}
