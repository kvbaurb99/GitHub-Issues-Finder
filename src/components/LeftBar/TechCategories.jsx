import React from 'react'
import categories from '../../data/tech.json'
import Category from './Category'

export default function TechCategories() {
  return (
    <div className='text-white w-[350px] mt-6'>
        <h2 className='text-orange-500 text-sm font-bold cursor-default tracking-wider'>FIND ISSUES BY TECHNOLOGY</h2>
        <div className='mt-3 flex flex-wrap gap-2'>
            { categories.map(category => (
                <Category key={category.name} name={category.name} />
            ))
            }
        </div>
    </div>
  )
}
