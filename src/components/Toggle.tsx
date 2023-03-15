
type ToogleProps = {
  deletePost: () => void
  setToggle: (toggle: boolean) => void
}

export default function Toggle ({ deletePost, setToggle } : ToogleProps) {
  return (
    <div
      onClick={(e) => {
        setToggle(false
        )
      }}
      className='fixed bg-black/60 w-full h-full z-20 left-0 top-0'
    >
      <div className='
      absolute
      bg-white
      top-1/2 left-1/2
      transform
      -translate-x-1/2
      -translate-y-1/2
      p-10
      rounded-md
      flex flex-col
      gap-6
      max-w-sm
      '
      >
        <h2 className='text-base'>
          Are you sure you want to delete this post? 😥
        </h2>
        <h3 className='text-sm text-red-600'>
          Pressing the delete button will permenantly delete your post
        </h3>
        <button
          onClick={deletePost}
          className='bg-red-600 text-sm text-white py-2 px-4 rounded-md'
        >
          Delete Post
        </button>
      </div>
    </div>
  )
}
