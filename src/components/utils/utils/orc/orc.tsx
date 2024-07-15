import { useEffect } from 'react'

export const ORC = () => {
  console.log('ban')

  useEffect(() => {}, [])
  return (
    <>
      <div className='h-24 flex items-center'>
        <div className='p-10'>
          <input type='file' name='file' />
        </div>
      </div>
    </>
  )
}
