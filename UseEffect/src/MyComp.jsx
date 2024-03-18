import React,{useEffect,useState} from 'react';

const MyComponent=()=>{
    const [count,setcount]=useState(0);


useEffect(()=>{
    console.log('My Component is Mounting...');
},[]); // useEffect will only run one time on Mounting, when the dependency array is empty. 

useEffect(()=>{
    console.log('Count got updated !',count);
},[count]); // useEffect will run on Mounting and on the update of state variable (count) as well. 

    return (
       <>
       <p>Count is {count}</p>
       <button onClick={()=>setcount(count+1)}>Update</button>
       </>
    )
}


export default MyComponent;