import React from "react"

import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import Button from "./Components/Button";
import "./App.css";

function App() {
return (
    <div className="todo-container">
        <Header />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <Button />
    </div>
)

}

export default App;
