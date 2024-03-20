import React,{useState} from "react";
import Square from "./Square";

// Below is the Logic of Tic-Tac-Toe
const Board=()=>{
    // Initially, we have filled the value of each square as null.  
    const [State,setState]=useState(Array(9).fill(null)); // It is an Array constructor combined with fill() method. Represents the state of each square on the Tic-Tac-Toe. 
    const [isXturn,setisXturn]=useState(true); // here we have defined a boolean useState with initial value as true. Represents whose turn it is. Indication X starts first.  
     
// This function checks if there's a winner on the board based on the current state.
   const checkWinner=()=>{
    // here we have stored the square number in the form of arrays.
    const winnerLogic=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    // this loop iterates through pre-defined winning combinations and checks if any of them matches the current state.
    for(let logic of winnerLogic){
        const [a,b,c]= logic; // storing the values of the above arrays.
        if(State[a]!==null && State[a]===State[b] && State[a]===State[c]){ // checking the condition 
          return State[a]; // this return state will go back to {isWinner} 
        }
    }
    return false; // this will return whole board. 
   }; 
 const isWinner=checkWinner(); // invoke of checkWinner.

// Below we have defined an handleClick function with index as an argument, It updates the state of the board according to whose turn it is (X or O).
    const handleClick=(index)=>{       
    const copyState=[...State]; // we have made a copy of an existing array.
      copyState[index]= isXturn ? "X" : "O"; // initially the value of isXturn will be true and this will check whether X will come or O.
      setState(copyState); // Again we will return the new array to the old array. 
      setisXturn(!isXturn); // Is Changing the value from true to false and vice-versa.
    }
    
    const handleReset=()=>{ // As soon as you click the button handleReset function will be invoked letting whole board clear again to play. 
        setState(Array(9).fill(null));
    }
    
    return( // Render function, It renders the Square components and passes appropriate props to them. 
    <div className="board-container">
        {/* As soon as this condition hits checkWinner function will be invoked.  */}
      {isWinner ? ( <>{isWinner} won the game   <button onClick={handleReset}>Play Again</button></>) :(
      <>
      {/* here we have defined each square with onclick event(handleClick())
      on clicking the square, handleClick function will be invoked.
      */}
      <div className="board-row">
      <Square onclick={()=> handleClick(0)} value={State[0]}/>
      <Square onclick={()=> handleClick(1)} value={State[1]}/>
      <Square onclick={()=> handleClick(2)} value={State[2]}/>
      </div>
      <div className="board-row">
      <Square onclick={()=> handleClick(3)} value={State[3]}/>
      <Square onclick={()=> handleClick(4)} value={State[4]}/>
      <Square onclick={()=> handleClick(5)} value={State[5]}/>
      </div>
      <div className="board-row">
      <Square onclick={()=> handleClick(6)} value={State[6]}/>
      <Square onclick={()=> handleClick(7)} value={State[7]}/>
      <Square onclick={()=> handleClick(8)} value={State[8]}/>
      </div>
      </>
      )}
    </div>
    )
}
export default Board;
