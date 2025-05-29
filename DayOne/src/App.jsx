import Flower from './assets/img.png'
import { Navbar } from "./components/Navbar"; // Import the Navbar component correctly
let x="Learning React";
let array=["user_1","user_2","user_3","user_4"];
let data="boy";
function Listen(){
  console.log("Entered");
  return <img src={Flower} alt="hi" style={{ height: "300px", width: "300px" }} />
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
      <Listen /> 
    </div>
  );
};

export default App;