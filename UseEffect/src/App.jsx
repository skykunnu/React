import React,{useEffect} from 'react'

import './App.css'
import MyComponent from './MyComp';
import { useState } from 'react';


function App() {

const [isVisible,setVisible]=useState(true);

useEffect(()=>{
  console.log("App component is Mounting...");
},[])
  return (
    <>
     {isVisible ? <MyComponent />:<></>}
     <button onClick={()=>setVisible(!isVisible)}>Toggle</button>
    </>
  )
}

export default App
