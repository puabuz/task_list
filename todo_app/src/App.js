import React from "react";
import { useState } from "react";
import ToDo from "./Todo";
import ToDoForm from "./ToDoForm";
import './App.css';

function App() {

    const [todos, setTodos] = useState([]);

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false,
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }



    return (
        <div>


            <div className="container">
                <header>
                    <h1>My To<span>D</span>o</h1>
                </header>
                <div className="main">
                    <h2>Список задач: {todos.length}</h2>
                    <ToDoForm addTask={addTask} />
                    {todos.map((todo) => {
                        return (
                            <ToDo
                                todo={todo}
                                key={todo.id}
                                removeTask={removeTask} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
