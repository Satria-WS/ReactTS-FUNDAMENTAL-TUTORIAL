import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/inputFeild";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

//Create Colin recact.fc , THERE ARE A BUNCH OF OTHER TYPES AS WELL
//React.ReactNode
//React.FC
const App: React.FC = () => {
    //give type string
    //using union for accept multiple type
    const [todo, setTodo] = useState<string>("");
    //create an array of a type
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
        }
    };

    console.log(todos);

    return (
        <div className="App">
            <span className="heading">Taskify</span>
            <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            {/* {todos.map((test) => (
                <li>{test.todo}</li>
            ))} */}
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
