import React from 'react'
import { useSelector } from 'react-redux'

export default function NavBar() {

    const title = useSelector(state => state?.category.category)

  return (
    <div className='w-full flex justify-center h-[100px] border-b border-gray-600 items-center'>
        <h1 className='text-orange-500 cursor-default text-4xl tracking-wider font-bold'><span className='text-white'>Issues</span> Finder {title ?<span className='text-white'>/ <span className='text-orange-500'>{title}</span></span> : null}</h1>
    </div>
  )
}
