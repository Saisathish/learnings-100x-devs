import axios from "axios";
import { useEffect, useState } from "react";

export default function useTodo(n){
  const [todos, setTodos] = useState([])
  const [loading, setLoadng] = useState(true);

  function apiCall(){
    axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoadng(false);
        })
  }

  useEffect(() => {
    const value = setInterval(() => {
      apiCall();
    }, n*1000);
    apiCall();

    return () => {
      clearInterval(value);
    }

  }, [n])

  return [todos, loading];
}