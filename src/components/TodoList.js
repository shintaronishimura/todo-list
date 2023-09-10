import { HStack } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [finishied, setFinished] = useState([]);
  const handleNewTask = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") return;
    setTodos((todos) => [
      ...todos,
      { id: Date.now(), task, isCompleted: false },
    ]);
    setTask("");
  };
  const handleDeleteTask = (id) => {
    const newFinisheds = finishied.filter((task) => task.id !== id);
    setFinished(newFinisheds);

    const newTodos = todos.filter((task) => task.id !== id);
    setTodos(newTodos);
  };
  const handleUpdatedTask = (id, isChecked) => {
    const taskToMove = isChecked
      ? finishied.find((task) => task.id === id)
      : todos.find((task) => task.id === id);
    if (isChecked) {
      taskToMove.isCompleted = !isChecked;
      setTodos((prevTodos) => [...prevTodos, taskToMove]);
      setFinished((prevFinished) =>
        prevFinished.filter((task) => task.id !== id)
      );
    } else {
      taskToMove.isCompleted = !isChecked;
      setFinished((prevFinished) => [...prevFinished, taskToMove]);
      setTodos((prevTodos) => prevTodos.filter((task) => task.id !== id));
    }
  };

  const DisplayTodoList = ({ Tasks }) => {
    return (
      <ul>
        {Tasks.map((todo, index) => (
          <li style={{ listStyle: "none" }} key={index}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleUpdatedTask(todo.id, todo.isCompleted)}
              style={{ marginRight: "20px" }}
            />
            <span style={{ fontWeight: "bold" }}>{todo.task}</span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleDeleteTask(todo.id)}
            >
              <AiOutlineDelete
                style={{
                  verticalAlign: "middle",
                  marginBottom: "1px",
                  marginLeft: "4px",
                }}
              />
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <HStack>
        <h1 style={{ marginRight: "20px" }}>やることリスト </h1>
        <form onSubmit={handleSubmit}>
          タスクを追加 :{" "}
          <input placeholder="新しいタスクを追加" onChange={handleNewTask} />
          <button type="submit">追加</button>
        </form>
      </HStack>
      <DisplayTodoList Tasks={todos} />
      <h2>完了したタスク</h2>
      <DisplayTodoList Tasks={finishied} />
    </div>
  );
};
export default TodoList;
