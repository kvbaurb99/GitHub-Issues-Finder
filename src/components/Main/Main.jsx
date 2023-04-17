import React from 'react'
import LeftBar from '../LeftBar/LeftBar'
import RightBar from '../RightBar/RightBar'

export default function Main() {
  return (
    <main className='w-full flex'>
        <LeftBar />
        <RightBar />
    </main>
  )
}
