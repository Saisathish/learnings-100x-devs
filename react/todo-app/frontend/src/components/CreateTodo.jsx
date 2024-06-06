import { useState } from "react";

function CreateTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleOnAddTodo(){
    addTodo(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <div>
      <input type="title" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/><br />
      <input type="description" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/><br />

      <button onClick={() => handleOnAddTodo()}>Add todo</button>
    </div>
  )
}

export default CreateTodo