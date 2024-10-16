import React, { FormEvent, ChangeEvent } from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type FormProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}: FormProps) => {
  // Input text change handler
  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  // Submit button handler
  const submitTodoHandler = (e: FormEvent) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random().toString() }, // Fixed id to be a string
    ]);
    setInputText("");
  };

  // Status select handler
  const statusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
