import React, { useRef } from "react";
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <form
                className="input"
                onSubmit={(event) => {
                    handleAdd(event);
                    inputRef.current?.blur();
                }}
            >
                <input
                    ref={inputRef}
                    type="input"
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                    placeholder="Enter a task"
                    className="input__box"
                ></input>
                <button
                    className="input_submit"
                    type="submit"
                    style={{
                        position: "relative",
                        bottom: "70px",
                        left: "360px",
                    }}
                >
                    Go
                </button>
            </form>
        </>
    );
};

export default InputFeild;
