import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Form from "./components/Form";

const saveTodos = () => {
  const saveTodos = localStorage.getItem("todos");
  if (saveTodos) {
    return JSON.parse(saveTodos);
  } else {
    return [];
  }
};

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(saveTodos());
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const delHandler = (id) => {
    if (window.confirm("از حذف خود مطمئن هستین؟")) {
      const updateTodos = todos.filter((item) => item.id !== id);
      setTodos(updateTodos);
      return;
    }
  };
  const doneHandler = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    const dublicateTodos = [...todos];
    dublicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    };
    setTodos(dublicateTodos);
    console.log(todos);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (todo.length < 5) {
      setError("کار خود را وارد کنید(حداقل 5 کاراکتر)");
      return false;
    }

    setTodos([...todos, { id: Date.now(), title: todo, done: false }]);
    setError(null);
    setTodo("");
    /* console.log(todos); */
  };

  return (
    <div>
      <Layout>
        <Header />
        <Form
          todo={todo}
          change={(e) => setTodo(e.target.value)}
          submit={submitHandler}
          error={error}
        />
        <Lists
          delHandler={delHandler}
          doneHandler={doneHandler}
          todos={todos}
        />
      </Layout>
    </div>
  );
}

export default App;
