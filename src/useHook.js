import { useState } from "react";

export default function useHook(){
  const [value,setValue] = useState([]);
  
  
  function addTodo(item){
    setValue([...value,item]);
  }
  
  function handleStatus(status,id){
    setValue(value.map((todo) => {
      if(todo.id === id){
        todo.isCompleted = status;
      }
      return todo
    }))
  }
  function handleEdit(id,name,description){
    setValue(value.map((todo) => {
      if(todo.id === id){
        todo.name = name
        todo.description = description
      }
      return todo
    }))
  }
  function handleDelete(id){
    const filtered = value.filter((v) => v.id !== id);
    setValue(filtered);
  }
 
  return {value,addTodo,handleDelete,handleStatus,handleEdit};
}