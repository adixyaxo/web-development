// rafce - react arrow function component export from ES7+ React/Redux/React-Native snippets extension
import React, { useState } from 'react'

// const [state, setstate] = useState(initialState)

// a = 1
// a = 2
/*
Isse kahte hain state change
hum state change ke liye hooks ka use kr sate hain
hum life cycle meathods ke liye bhi hooks ka use kr sakte hain
also for
optimisation
side stack

HOOKS ARE FUNCTIONAL COMPONENTS
PAHLE CLASS COMPONENTS HOTE THE REACT ME

*/
// everything should be in the lambda of app to work properly

const App = () => {
  const [variable, setA] = useState(10)


  const square = (variable) => { return variable * variable }

  const doubl = (variable) => { setA(variable = variable * 2) }



  return (
    <div className='w-screen h-[20vh] align-middle items-center flex flex-col justify-center'>
      <h1 className='text-2xl text-center mt-[5vh] mb-[1.5vh]'>App {square(variable)}</h1>
      <button className='align-middle items-center rounded-2xl w-[10vw] h-[7vh] mt-[1.5vh] bg-white text-black' onClick={() => doubl(variable)}>double amount</button>
    </div>
  )
}
export default App
