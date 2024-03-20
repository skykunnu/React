import { useState } from 'react'
import './App.css'

function App() {
  
// counter is a variable (with default value - 0) and setCounter is a function which is responsible to update the variable. 

const [counter,setCounter]=useState(0) // It is a hook used to change the state not the value. it will only change the UI. 

//let counter=0;
const addValue=()=>{
  setCounter(counter+1);
/* Below is an Interview question asked in react dev interview. 
  Q-> what will be the value of counter on clicking add value btn. 
 Ans-> Since setCounter is an asynchronous function, React may batch multiple state updates together for performance reasons.
 However to solve this issue, we can utilize the functional form of setState that accepts callback in it. 
 When you access previous state through setState, React gaurantess that this function will recieve the latest state value as an argument
  this ensures that you're always working with the most up-to-date state, regardless of how react batches state updates.  

  After Setting prevCounter and clicking addValue btn the counter value would be from 0 to 4. Not like the previous counter value from 0 to 1 on 1st click just like a normal click.  
  */
// setCounter(counter+1)--> setCounter((prevCounter)=>prevCounter+1);
// setCounter(counter+1)--> setCounter((prevCounter)=>prevCounter+1);
// setCounter(counter+1)--> setCounter((prevCounter)=>prevCounter+1);
// setCounter(counter+1)--> setCounter((prevCounter)=>prevCounter+1);
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