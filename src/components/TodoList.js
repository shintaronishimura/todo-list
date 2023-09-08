import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
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
    ]);
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
    const handleDeleteTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

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
                        {todo.task} <span style={{ cursor: 'pointer' }} onClick={() => handleDeleteTask(index)}> [×] </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList