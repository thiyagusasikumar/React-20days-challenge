import { useEffect, useRef, useState } from 'react';
import './CSS/ToDo.css'
import ToDoList from './ToDoList';
let count=0;
const ToDo = () => {
  const [todos,settodos]=useState([]);
  const inputRef=useRef(null);
  const add=()=>{
    settodos([...todos,{no:count,text:inputRef.current.value,display:""}])
    count++;
    localStorage.setItem("todos_count",count);
    inputRef.current.value="";
  }
  useEffect(()=>{
    settodos(JSON.parse(localStorage.getItem("todos")));
    count=localStorage.getItem("todos_count");
  },[])
  useEffect(()=>{
    setTimeout (()=>{
      console.log(todos);
      localStorage.setItem("todos",JSON.stringify(todos));
    },100);
  },[todos])
  return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className='todo-add'>
        <input ref={inputRef} type="text"placeholder='Add Your Task' className='todo-input' />
        <button onClick={()=>{add()}} type='submit' className='todo-add-btn'> Add</button>
      </div>
      <div className='todo-list'>
        {   todos.map((item,index)=>{
            return <ToDoList key={index} settodos={settodos} no={item.no} display={item.display} text={item.text}/>
          })
        }
      </div>
    </div>
  )
}
export default ToDo;