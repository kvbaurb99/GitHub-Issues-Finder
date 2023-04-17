import React from 'react'
import About from './About'
import TechCategories from './TechCategories'
import BeginnerSection from './BeginnerSection'
import Reminder from './Reminder'
import Guide from './Guide'

export default function LeftBar() {
  return (
    <div className='w-[40%] p-4 h-full flex flex-col items-end'>
        <About />
        <Reminder />
        <Guide />
        <TechCategories />
        <BeginnerSection />
    </div>
  )
}
