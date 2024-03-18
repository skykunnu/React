import React from "react";


const TodoItem=(props)=>{ // here we have defined props 
return (
    
    <li className="todo-item">
        <span>
            {/* Making input a conditional rendering */}
    {props.completed ? <></> : <input type="checkbox" />}
    
    <span className="todo-item-text">{props.text}</span> {/* here we are rendering text with the help of props and as it is a dynamic value, it is wrapped under curly braces.*/}
        </span>
    <p>...</p>
    </li>

);
};

export default TodoItem;