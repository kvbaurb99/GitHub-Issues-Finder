import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCategory } from '../../redux/slices/categorySlice';
import { getIssuesSuccess } from '../../redux/slices/issuesSlice';

export default function Category({name}) {


    const dispatch = useDispatch();
    const category = useSelector(state => state.category.category)

    const handleClick = () => {
        dispatch(updateCategory(name))
        dispatch(getIssuesSuccess([]))
    }

  return (
    <button onClick={handleClick} className={`text-sm border-gray-500 border py-1 px-4 rounded-sm hover:border-orange-500 hover:text-orange-500 ${category === name ? 'border-orange-500 text-orange-500' : null}`}>
        <p className='tracking-wide'>{name}</p>
    </button>
  )
}
