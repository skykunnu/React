import React,{useEffect,useState} from 'react';

const MyComponent=()=>{
    const [count,setcount]=useState(0);

// When the component gets mounted , the function inside useEffect gets executed.
// When the component gets unmounted, the return function inside useEffect gets executed. 
useEffect(()=>{
    console.log('My Component is Mounting...');

return function (){
    console.log("Unmounting..."); // This function runs when the component gets unmounted, when the toggle button clears the screen. 
};
},[]); // useEffect will only run one time on Mounting, when the dependency array is empty. 

useEffect(()=>{
    console.log('Count got updated !',count); // As soon as you click update btn, this log get executed as component re-rendered leading the value of count to be 1.

    return function(){ // As soon as you click the update btn, the component gets unmounted leading the value of count to be 0.  
        console.log("Returning count",count);
    };
},[count]); // useEffect will run on Mounting as well as on update of state variable (count) as well. 

    return (
       <>
       <p>Count is {count}</p>
       <button onClick={()=>setcount(count+1)}>Update</button>
       </>
    )
}


export default MyComponent;
