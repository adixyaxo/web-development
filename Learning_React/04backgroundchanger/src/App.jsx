import React from "react";
import { useState } from "react";
import './App.css';


const App = () => {
  const [bgColour, setbgColour] = useState("blue")

  return (
    <div className='w-[90vw] pt-[20vh] h-[80vh] rounded-3xl my-[10vh] py-[5vh] flex flex-col align-middle' style={{backgroundColor:bgColour}}>
      <h1 className="text-6xl font-light text-center">Background Changer</h1>
      <div className="buttons flex w-full justify-center ">
        <button className="bg-blue-500 w-30 h-10 rounded-3xl border-slate-950 border-2 mt-[20vh] mx-5" onClick={()=>{setbgColour("blue")}}
          >Blue</button>


        <button className="bg-slate-500 w-30 h-10 rounded-3xl border-slate-950 border-2 mt-[20vh] mx-5"
        onClick={()=>{setbgColour("#708090")}}
        >Slate</button>


        <button className="bg-yellow-500 w-30 h-10 rounded-3xl border-slate-950 border-2 mt-[20vh] mx-5"
        onClick={()=>{setbgColour("yellow")}}
        >Yellow</button>
      </div>
    </div>
  )
}

export default App
