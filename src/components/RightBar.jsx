import React from 'react'
import SearchBar from './SearchBar'
import IssuesContainer from './IssuesContainer'

export default function RightBar() {
  return (
    <div className='w-[60%] h-full p-4 border-l border-gray-600'>
        <SearchBar />
        <IssuesContainer />
    </div>
  )
}
