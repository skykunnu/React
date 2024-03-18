import React,{useEffect,useState} from 'react'

import './App.css'
// import MyComponent from './MyComp';
import Timer from './Timer';


function App() {

// const [isVisible,setVisible]=useState(true);

// useEffect(()=>{
//   console.log("App component is Mounting...");
// },[])
  return (
    <>
     {/* {isVisible ? <MyComponent />:<></>}
     <button onClick={()=>setVisible(!isVisible)}>Toggle</button> */}
    <Timer /> 
    </>
  )
}

export default App
