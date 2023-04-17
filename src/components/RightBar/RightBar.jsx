import React from 'react'
import SearchBar from './SearchBar'
import IssuesContainer from './IssuesContainer'
import { useSelector } from 'react-redux'

export default function RightBar() {

    const issues = useSelector(state => state.issues.issues)

  return (
    <div className={`w-[60%] h-full p-4 ${issues.length > 0 ? 'border-l' : null} border-gray-600`}>
        <SearchBar />
        <IssuesContainer />
    </div>
  )
}
