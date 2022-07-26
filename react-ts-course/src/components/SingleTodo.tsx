import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import "./styles.css";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const handleDone = (id: number) =>
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );

    return (
        <div>
            <form className="todos__single">
                
                <span className="todos__single--text">{todo.todo}</span>
                <div>
                    <span className="icon">
                        <AiFillEdit />
                    </span>
                    <span className="icon">
                        <AiFillDelete />
                    </span>
                    <span className="icon" onClick={() => handleDone(todo.id)}>
                        <IoMdDoneAll />
                    </span>
                </div>
            </form>
        </div>
    );
};

export default SingleTodo;
