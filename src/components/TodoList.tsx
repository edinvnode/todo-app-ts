import React from "react";
import Todo from "./Todo";

type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

interface TodoListProps {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  filteredTodos: TodoType[];
}

const TodoList = ({ todos, setTodos, filteredTodos }: TodoListProps) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
            id={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
