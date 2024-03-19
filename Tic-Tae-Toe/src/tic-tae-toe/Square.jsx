import React from "react";

// Below we have made a Square Component having props as an argument in it.
const Square=(props)=>{
    return (
        <div onClick={props.onclick} 
        style={{border: "1px solid", height:"100px", width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}} 
        className="sqaure">
        
            <h5>{props.value}</h5> {/* We are using props.value to dynamic take the values of each square.*/}
        </div>
    )
}
export default Square;