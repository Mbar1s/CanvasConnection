import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex flex-row gap-4 border-b bg-black text-white'>
        <h1 className='p-4 border-l items-center justify-center'>Navbar</h1>
        <h1 className='p-4 border-l items-center justify-center'>About</h1>
        <h1 className='p-4 border-l items-center justify-center'>More</h1>
    </nav>
  )
}
