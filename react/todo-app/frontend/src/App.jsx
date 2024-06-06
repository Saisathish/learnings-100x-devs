import { useEffect, useState } from 'react';
import './App.css'
import CreateTodo from './components/CreateTodo'
import DisplayTodos from './components/DisplayTodos'

function App() {
  const [todo, setTodo] = useState([]);

  async function getTodos(){
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodo(data.todos);
  }

  async function addTodoApi(title, description){
    await fetch("http://localhost:3000/todos",{
      method: "POST",
      body: JSON.stringify({
        title,
        description
      }),
      headers: {
        "content-type": "application/json"
      }
    });

    getTodos();
  }

  async function updateTodoApi(id){
    await fetch("http://localhost:3000/completed",{
      method: "PUT",
      body: JSON.stringify({
        id
      }),
      headers: {
        "content-type": "application/json"
      }
    });

    getTodos();
  }

  useEffect(() => {
    getTodos();
  }, [])
  

  return (
    <>
      <CreateTodo addTodo={addTodoApi} />
      <DisplayTodos todos={todo} updateTodo={updateTodoApi} />
    </>
  )
}

export default App
