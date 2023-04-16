import React, { useState } from 'react'
import { getIssuesFetch } from '../redux/slices/issuesSlice'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBar() {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getIssuesFetch({issue: value}))
        
    }


  return (
    <div className='w-full flex'>
        <div className='relative w-[70%]'>
            <input onChange={(e) => setValue(e.target.value)} type="text" name="search" id="search" className='p-2 rounded  border border-white/20 outline-none focus:border-orange-500 text-white bg-[#1e2124] w-full' />
            { value !== '' ? <AiOutlineSearch onClick={handleSubmit} className='text-white text-xl absolute top-3 right-3 cursor-pointer' /> :  <AiOutlineSearch className='text-gray-500 text-xl absolute top-3 right-3 cursor-default' />}
        </div>    
    </div>
  )
}
