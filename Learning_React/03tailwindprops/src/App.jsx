import { useState } from 'react'
import './App.css'

import React from 'react'
import { CardDemo } from './components/ui/carddemo'

const App = () => {
  return (
    <>
      <h1 className='text-7xl w-full p-10 text-center text-slate-800 font-extralight'>Vite with tailwind</h1>
      <CardDemo/>
    </>
  )
}

export default App
