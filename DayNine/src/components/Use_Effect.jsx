import React, { useEffect } from 'react'
import { useState } from 'react'

const Use_Effect = () => {
  const [num,setNum]=useState(100);
  useEffect(()=>{
    setNum(200);
    console.log(num)
  },[num])
  const add=()=>{
    setNum(num+1);
    console.log(num);
  }
  return (
    <div>
      <h1 style={{ color: 'red' }}>Use_Effect</h1>
        <h1>{num}</h1>
        <button onClick={add}>Add</button>
    </div>
  )
}

export default Use_Effect