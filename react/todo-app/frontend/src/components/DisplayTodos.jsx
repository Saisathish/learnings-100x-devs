function DisplayTodos({ todos, updateTodo }) {
  function handleUpdateTodo(id){
    updateTodo(id);
  }

  return (
    <div>
      {todos.map((todo) => (<div key={todo.title}>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <button disabled={todo.completed} onClick={() => handleUpdateTodo(todo._id) }>Mark as done</button>
      </div>))}
    </div>
  )
}

export default DisplayTodos