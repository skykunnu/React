import React,{useEffect} from 'react'

import './App.css'
import MyComponent from './MyComp';


function App() {

useEffect(()=>{
  console.log("App component is Mounting...");
},[])
  return (
    <>
     <MyComponent />
    </>
  )
}

export default App
