import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] =useState(0) // Behind the scene the counter is behaving like let counter only.
  // And setCounter is a method which will control / responsible for the updation of counter variable.
  
// let counter=0;

const addValue=()=>{
if(counter <22){
  setCounter(counter+1)
}
else{
  setCounter(22)
}
}
const DecreaseValue=()=>{
 if(counter>0){
  setCounter(counter-1);
 }
 else{
  setCounter(0);
 }
 
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={DecreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
