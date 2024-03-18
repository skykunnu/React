import React from "react"

import Header from "./Components/Header.jsx";
import TodoItem from "./Components/TodoItem";
import Button from "./Components/Button";
import "./App.css";

function App() {
return (
    <div className="todo-container">
        <Header title="Todo" /> 
         {/* below we have passed the text prop in form of attributes. */}
        <TodoItem text="Eat" completed={true}/>  
        <TodoItem text="Code"/>
        <TodoItem  text="Play"/>
        <TodoItem  text="Sleep"/>
        <TodoItem text="Repeat"/>
        <Button />
    </div>
)

}

export default App;
