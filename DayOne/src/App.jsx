
import { Navbar } from "./components/Navbar"; // Import the Navbar component correctly
let x="Learning React";
let array=["user_1","user_2","user_3","user_4"];
let data="boy";
function listen(){
  console.log("Entered");
    
}
const App = () => {
  return (
    <div>
      <Navbar /> 
      {x}
      {
        array.map((user)=>{return <h2>{user}</h2>})  
      }
      {data==="girl"?<h1>BOY</h1>:<h1>GIRL</h1>}
      <h1>Event Handlers</h1>
      <button onClick={listen}>Click Me</button>
    </div>
  );
};

export default App;