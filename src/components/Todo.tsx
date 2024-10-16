import React from "react";

type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

interface TodoProps {
  todo: TodoType;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  text: string;
  id: string;
}

const Todo: React.FC<TodoProps> = ({ todo, todos, setTodos, text, id }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Todo;
