const SecondComponents = ({data,fn}) => {
  return (
    <div>
        <button onClick={()=>fn(0)}>set 0</button>
    </div>
  )
}
export default SecondComponents;

