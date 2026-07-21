import React from 'react'

const Navigation = () => {
  return (
    <>
    <nav className='flex justify-between align-middle items-center mx-[5%] my-[2vh] bg-blue-950 w-[90%] h-[5vh] px-[5%] rounded-2xl border-black border-2'>
      <h2>
        LOGO
      </h2>
      <div className='flex'>
        <h5 className='px-2.5'>Home</h5>
        <h5 className='px-2.5'>About</h5>
        <h5 className='px-2.5'>Contact</h5>
        <h5 className='px-2.5'>Menu</h5>
      </div>
    </nav>
    </>
  )
}

export default Navigation
