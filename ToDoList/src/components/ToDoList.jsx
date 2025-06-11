import './CSS/ToDoList.css'
import tick from './assets/tick.png'
import notTick from './assets/not_tick.png'
import cross from './assets/cross.png'

const ToDoList = ({no,display,text,settodos}) => {
  const deleteTask=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    console.log(data[0].no,no);
    data =data.filter((todo)=>todo.no!==no);
    settodos(data);
  }
  const toggle=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++){
    if(data[i].no===no){
      if(data[i].display===''){
        data[i].display="line-through"
      }
      else{
        data[i].display="";
      }
      break;
    }
    }
    settodos(data);
  }
  return ( 
    <div className='todolist'>
      <div className={`text ${display}`} onClick={()=>{toggle(no)}}>
        {
          display===''?<img className='notTick' src={notTick} alt="not Tick" />:<img className='tick' src={tick} alt="Tick" />
        }
      <div>{text}</div>
      </div>
      <img onClick={()=>{deleteTask(no)}} className='cross' src={cross} alt="Cross"  />
    </div>

   )
}
export default ToDoList;
