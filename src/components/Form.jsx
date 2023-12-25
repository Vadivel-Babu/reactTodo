import {  useState } from "react"
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./form.css";

const Form = ({add}) => {
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const unique_id = uuid();
 
    // Get first 8 characters using slice
  const small_id = unique_id.slice(0, 8);
  

  function handleSubmit(){
    if(name.trim().length === 0 || description.trim().length === 0){
      toast.error("Can't add empty value");
      return;
    }
    const data = {
      id:small_id,
      name,
      description,
      isCompleted:'Not completed'
    }
    add(data);
    setName('');
    setDescription(''); 
  }
  return (
    <div className="flex-1">
      <ToastContainer />
      <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Todo Name" />
      <input type="text" className="input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Todo Description"/>
      <button className="btns" onClick={handleSubmit}>Add Todo</button>
    </div>
  )
}

export default Form