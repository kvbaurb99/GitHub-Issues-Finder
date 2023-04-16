import React from 'react'
import LeftBar from './LeftBar'
import RightBar from './RightBar'

export default function Main() {
  return (
    <main className='w-full flex'>
        <LeftBar />
        <RightBar />
    </main>
  )
}
