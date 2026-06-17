// rafce - react arrow function component export from ES7+ React/Redux/React-Native snippets extension
import React from 'react'

let variable = 100

const square = (variable)=>{return variable*variable}

const hello_alert = (variable)=>{variable=variable*2}

const App = () => {
  return (
    <div>
      <h1>App {square(variable)}</h1>
      <button onClick={hello_alert(variable)}>double amount</button>
    </div>
  )
}

// ye kyu nahi chalra hai
// ans hai kyunki react nalla nahi hai jo bolega kar dega tum direct dom ke sath interact nai kr sakte tumhe react ke through ki apna kaam nikalwana hoga
// iske liye tumhe use state use krna padega

export default App
