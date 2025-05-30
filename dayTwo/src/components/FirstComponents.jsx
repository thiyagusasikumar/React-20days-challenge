
const FirstComponents = ({data,fn}) => {
  return (
    <div>
            {data}
            <button onClick={()=>{fn(10)}} >set 10</button>
    </div>
  )
}
export default FirstComponents;
