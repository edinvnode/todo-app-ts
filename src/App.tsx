import { useState, useEffect } from "react";
import "./styles.css";
//importing components

import Form from "./components/Form";
import TodoList from "./components/TodoList";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  //state
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [status, setStatus] = useState<string>("all");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  //functions

  const filterHender = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo: Todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(
          todos.filter((todo: Todo) => todo.completed === false)
        );
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //use effect

  useEffect(() => {
    filterHender();
    //saveLocalTodos();
  }, [todos, status]);

  //save to local storage

  /* const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  };*/

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
