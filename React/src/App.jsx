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
    <div>
      <h1>App {square(variable)}</h1>
      <button onClick={() => doubl(variable)}>double amount</button>
    </div>
  )
}
export default App
