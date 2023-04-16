import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Issue({title, state, date, comments, link, description}) {

    const [isHover, setIsHover] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    const technology = useSelector(state => state.category.category)
    const isBeginner = useSelector(state => state.issues.isBeginnerFriendly)
    const newDate = new Date(date)
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  return (
    <div onClick={() => setIsExpanded(true)} onMouseLeave={() => setIsHover(false)} onMouseOver={() => setIsHover(true)} className={`text-white border border-gray-600 mt-4 p-4 cursor-pointer ${isHover ? 'bg-gray-600/30' : null} h-full rounded relative`}>
        <a href={link} target='_blank'><p className={`font-bold cursor-pointer text-xl tracking-wider max-w-[90%] ${isHover ? 'text-orange-500' : null}`}>{title}</p></a>
        {description !== null ? <p className='text-sm tracking-wide mt-2'>{description.slice(0, 150)} {description.length > 150 ? '...' : null}</p> : null}
        <p className='absolute top-4 right-4 text-green-500 text-sm font-bold tracking-wide'>{state.charAt(0).toUpperCase() + state.slice(1)}</p>
        <div className='flex items-center gap-2 text-sm text-gray-400 mt-4'>
            <p>Technology: <span className='font-bold'>{technology}</span></p>
            <p>Started at: <span className='font-bold'>{formattedDate}</span></p>
            <p>Comments: <span className='font-bold'>{comments}</span></p>
            {isBeginner ? <p className='text-purple-500 absolute right-4 text-xs font-bold'>Beginner Friendly</p> : null}
        </div>
    </div>
  )
}
