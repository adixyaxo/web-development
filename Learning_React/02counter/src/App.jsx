import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  const[counter,setCounter] = useState(15)

  const addValue = () =>{setCounter(counter + 1)}
  const removeValue = () =>{setCounter(counter - 1)}

  return (
    <>
      <h2></h2>
      <h2>Counter Value : {counter}</h2>
      <h6></h6>
      <button
      onClick={addValue}
      >Add Value</button>
      <h2></h2>
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
