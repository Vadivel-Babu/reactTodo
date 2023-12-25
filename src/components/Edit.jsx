import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


const Edit = ({closeEditing,todo,handleEdit}) => {
  const [name,setName] = useState(todo.name)
  const [description,setDescription] = useState(todo.description)
  function handleSubmit(){
    if(name.trim().length === 0 || description.trim().length === 0){
      toast.error("Can't add empty value");
      return;
    } 
    handleEdit(todo.id,name,description);  
    setName('');
    setDescription('');
    closeEditing(); 
  }
  return (
     <div className="flex-1">
      <ToastContainer />
      <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Todo Name" />
      <input type="text" className="input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Todo Description"/>
      <button className="btns" onClick={handleSubmit}>Update</button>
      <button className="btn btn-danger" onClick={closeEditing}>cancel</button>
    </div>
  )
}

export default Edit