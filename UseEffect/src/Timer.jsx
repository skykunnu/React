import React,{useEffect,useState} from "react";


const Timer=()=>{
    const [time,setTime]=useState(0);

    
// As we re-render, first time Mounted statement will be executed and thereafter ,first the return function will be executed and then SetInterval function will be executed. 
 useEffect(()=>{
    //Mounted
    const timer=setInterval(()=>setTime(time+1),1000);

    //Unmounted--> This return function is removing previous Interval.  
    return function(){
        clearInterval(timer); // It is a interval used to clear the previous setInterval present in the stack memory.
    }
 },[time]);


    return (
        <>
        <h1>Stopwatch</h1>
        <p>Current Time is {time}</p>
        </>
    )
}

export default Timer;