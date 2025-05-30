import { useState } from "react"
import FirstComponents from "./components/FirstComponents";
import SecondComponents from "./components/secondComponents";


const App = () => {
  const [x,setsx]=useState(0);
  const btnClick=()=>{
    console.log("Clicked");
    setsx(x+1);
    console.log(x);
  };
  return (
    <div>
      <button onClick={()=>{btnClick()}}>Click me</button>
      <h1>The is the example of list </h1>
      <ul>
        <li>Thiyagu</li>
        <li>Adthiya</li>
        <li>kewin </li>
        <li>dinesh</li>
        <li>Jeeva</li>
      </ul>
      <FirstComponents data={x} fn={setsx} />
      <SecondComponents data={x} fn={setsx} />
    </div>
  )
}
export default App;
