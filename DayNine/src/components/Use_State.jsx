import React, { useState } from 'react'

const Use_State = () => {
  const [num,setNum]=useState(0);
  const add=()=>{
    console.log("entered")
    setNum(num+1);
  }
  const [text,setText]=useState('hello');
  const displayText=(e)=>{
    setText(e.target.value)
  }
  return (
    <div>
      <h1 style={{ color: 'red' }}>Use_State</h1>
        <h1>{num}</h1>
        <button onClick={add}>
          Add
        </button>
        <br />
        <input type="text" value={text} onChange={displayText}/>
        <h1>you entered {text}</h1>
        <button onClick={()=>{
          setText('Hello')
        }}>Reset</button>
    </div>
  )
}

export default Use_State