import { useState } from "react";
import Todo from "./parts/Todo";
import TodoForm from "./parts/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  // console.log(todos);
  
  return (
    <div className="main">
      <div className="todo-list">
        <h1>Welcome, what is your main focus today?</h1>
        <TodoForm addTodo={addTodo} />
      </div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    <footer>
      <p>Visit how this page is made <a href="https://github.com/NaturaAdnyana/FirstReactApp-TodoApp">here.</a></p>
    </footer>
    </div>
  );
}

export default App;