import React from 'react'
import About from './About'
import TechCategories from './TechCategories'
import BeginnerSection from './BeginnerSection'

export default function LeftBar() {
  return (
    <div className='w-[40%] p-4 h-full flex flex-col items-end'>
        <About />
        <TechCategories />
        <BeginnerSection />
    </div>
  )
}
