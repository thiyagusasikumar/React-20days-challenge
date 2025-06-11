export const LearningObjects = () => {
    let person={
        name:"Thiyagu",
        age:18,
        design:{
            backgroundColor:'black',
            color:"white",  
        },
    }
  return (
    <div>
        <div style={person.design}>
            <h1>Name is {person.name}</h1>
        </div>
    </div>
  )
}
