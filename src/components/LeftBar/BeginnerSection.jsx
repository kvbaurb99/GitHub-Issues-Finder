import React from 'react'
import { getEasyIssuesFetch } from '../../redux/slices/issuesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function BeginnerSection() {

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.issues.isLoadingEasy)

    const handleClick = () => {
        dispatch(getEasyIssuesFetch())
    }

  return (
    <div className='w-[350px] mt-6 text-white'>
        <h2 className='text-sm text-orange-500 font-bold tracking-wider cursor-default'>FIND BEGINNER FRIENDLY ISSUES</h2>
        <div className='w-full flex justify-start'>
            <button onClick={handleClick} className='w-[45%] text-base mt-4 min-h-[35px] py-1 px-4 rounded bg-orange-500 font-bold hover:bg-orange-400 active:scale-95 flex justify-center items-center'>{isLoading ? <AiOutlineLoading3Quarters className='animate-spin text-white text-lg' /> : 'Find'}</button>
        </div>
    </div>
  )
}
