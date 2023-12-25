
import { useState } from "react";
import "./card.css";

const Card = ({data,remove,status,editMode}) => {
  const [state,setState] = useState(data.isCompleted);
  function handleStatus(e){
    setState(e.target.value)
    status(e.target.value,data.id)
  }  
  return (
      <div className="content">
        <h2 className="title">Name:{data.name}</h2>
        <h2 className="description">Description:{data.description}</h2>
        <div className="status">
          <label htmlFor="filter">status:</label>
          <select name="filter" id="" value={state} onChange={handleStatus } className={data.isCompleted === 'Completed' ? 'completed' : "not"}>
            <option value="Not completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="btn-wrapper">
          <button className="btn-edit" onClick={() => editMode(data)}>Edit</button>
          <button className="btn-delete" onClick={() => remove(data.id)}>Delete</button>    
        </div>
      </div>
  )
}

export default Card