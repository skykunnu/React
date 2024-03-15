import { useState } from 'react'
import './App.css'

function App() {
  
// counter is a variable (with default value - 0) and setCounter is a function which is responsible to update the variable. 

const [counter,setCounter]=useState(0) // It is a hook used to change the state not the value. it will only change the UI. 

//let counter=0;
const addValue=()=>{

setCounter(counter+1);
}
const removeValue=()=>{
  if(counter>0)
 setCounter(counter-1);
else
setCounter(0);
}
  return (
    <>
      <h1>Digit Counter</h1>
      <h2>Counter value: {counter}</h2>
      
      <button onClick={addValue}>Add value</button>
      <br /><br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App;