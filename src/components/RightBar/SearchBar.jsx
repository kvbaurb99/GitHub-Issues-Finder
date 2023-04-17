import React, { useState } from 'react'
import { getIssuesFetch } from '../../redux/slices/issuesSlice'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineSearch, AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function SearchBar() {

    const [value, setValue] = useState('')
    const isLoading = useSelector(state => state.issues.isLoading)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        dispatch(getIssuesFetch({issue: value}))
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSubmit();
        }
      }


      return (
        <div className='w-full flex'>
          <div className='relative w-[70%]'>
            <input 
              onKeyDown={value ? handleKeyPress : null} 
              onChange={(e) => setValue(e.target.value)} 
              type="text"
              placeholder='Find issues! Just remember to choose technology.' 
              name="search" 
              id="search" 
              className='p-3 rounded  border border-white/20 outline-none focus:border-orange-500 text-white bg-[#1e2124] w-full text-sm placeholder-gray-400/50' 
            />
            {value !== '' ? (
              isLoading ? (
                <AiOutlineLoading3Quarters className='text-gray-500 text-lg absolute top-4 right-4 cursor-default animate-spin' />
              ) : (
                <AiOutlineSearch onClick={handleSubmit} className='text-white text-lg absolute top-4 right-4 cursor-pointer' />
              )
            ) : <AiOutlineSearch className='text-white/30 text-lg absolute top-4 right-4 cursor-default' />}
          </div>    
        </div>
      );
}
