import { useState } from "react";
import Card from "./components/Card"
import Form from "./components/Form"
import useHook from "./useHook"
import Edit from "./components/Edit";

function App() {
  const [editing,setEditing] = useState(false);
  const {value, addTodo, handleDelete,handleStatus,handleEdit} = useHook();
  const [editTodo,setEditTodo] = useState(null);
  const [filter,setFilter] = useState('All')


  const filtered = value.filter((todo) => {
    if(filter === 'All'){
      return true;
    }
    return todo.isCompleted === filter;
  })
  function editingMode(todo){
    setEditTodo(todo);
    setEditing(true);
  }

  function closeEditing(){
    setEditing(false);
  }
 

  return (
    <div className="container">
      <h1 style={{textAlign:'center',color:'rgb(0, 184, 159)'}}>Todo</h1>
      {!editing && <Form add={addTodo}/>}
      {editing && <Edit closeEditing={closeEditing} todo={editTodo} handleEdit={handleEdit}/>}
      <div className="flex" style={{display:'flex',flexWrap:'wrap'}}>
        <h1>My Todos</h1>
        <div className="filter" style={{display:'flex',flexWrap:'wrap'}}>
        <label htmlFor="filters">Status filter:</label>
        <select name="filters" onChange={(e) => setFilter(e.target.value)} id="" style={{backgroundColor:"rgb(255, 120, 120)"}}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not completed">Not completed</option>
        </select>
        </div>
      </div>
      <div className="wrapper">
      {value.length !== 0 && filtered.map((item) => 
      <Card 
        key={item.id} 
        data={item} 
        remove={handleDelete}
        status={handleStatus}
        editMode={editingMode}
      /> 
      )} 
      {value.length ===0 && 
      <h1 style={{textAlign:'center',margin:'20px auto'}}>No Todos</h1>
      }   
      </div>
    </div>
  )
}

export default App
