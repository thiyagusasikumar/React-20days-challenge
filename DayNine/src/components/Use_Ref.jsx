import React, { useRef, useState } from 'react';

const Use_Ref = () => {
  const inputRef=useRef();
  const [name,setName]=useState("");

  console.log("rendering.../");

  const reset=()=>{
  setName("");
  inputRef.current.value="";
  }
  const printInputRef=()=>{
    console.log(inputRef.current.value);
  }
  return (
    <div>
      <hr />
      <h1 style={{backgroundColor:"red"}}>Use_Ref</h1>
      <label>Enter Your Name</label>
      <input ref={inputRef} type="text" value={name} onChange={(event)=>{setName(event.target.value)}}/>
      <h1>Hi {name}</h1>
      <button onClick={printInputRef}>printInputRef</button>
      </div>
  )
}
  
export default Use_Ref