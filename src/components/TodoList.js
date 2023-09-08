import { useState } from "react";

const TodoList = () => {
    const initialState = [
        {
            task: "Learn vue.js",
            isCompleted: false,
        },
        {
            task: "Learn React Hook",
            isCompleted: false,
        },
        {
            task: "Learn Getsby.js",
            isCompleted: false,
        }
    ];
    const [todos, setTodos] = useState(initialState);
    const [task, setTask] = useState('');
    const handleNewTask = (e) => {
        setTask(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task === "") return;
        console.log({ task, isCompleted: true });
        console.log(...todos);
        setTodos((todos) => [...todos, { task, isCompleted: false }]);
        setTask('');
    }

    return (
        <div>
            <h1>TodoList</h1>
            <form onSubmit={handleSubmit}>
                Add Task : <input placeholder="Add New Task" onChange={handleNewTask} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.task}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList