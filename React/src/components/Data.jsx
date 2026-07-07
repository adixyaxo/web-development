import axios from 'axios'
import React, { useState } from 'react'
// npm i axios


const Data = () => {

  const [url, seturl] = useState("https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ")

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    console.log(response["data"][0]["url"])
    seturl(response["data"][0]["url"])
  }

  return (
    <div className='w-screen h-[20vh] flex flex-col align-middle items-center justify-center'>
      <button onClick={getData} className='bg-amber-100 w-[10vw] rounded-2xl text-2xl text-black h-20'>Get Data</button>
      <img src={url} alt="" className='h-[50%]'/>
    </div>

  )
}

export default Data
