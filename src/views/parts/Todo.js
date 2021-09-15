const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="todo-text"><h2>{todo.text}</h2></div>
      <div className="sec-button">
        <button className="remove" onClick={() => removeTodo(index)}>&#10006; Remove</button>
        <button className="complete" onClick={() => completeTodo(index)}>&#10003; Complete</button>
      </div>
    </div>
  );
}

export default Todo;