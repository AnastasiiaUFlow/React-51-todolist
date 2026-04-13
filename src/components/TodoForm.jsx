import { useState } from "react";
import { useDispatch } from "react-redux";
import React from 'react'
import { addTodo} from "../redux/slices/slice";

const TodoForm = ()=>{
const [inputValue, setInputValue] = useState('')
const dispatch = useDispatch()

const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) return;

    dispatch(addTodo({
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
    }));

    setInputValue('');
};
const handleRemoveTodo = (id)=>{
    dispatch(deleteTodo(id))
}
  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text" placeholder="Add new Task" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button type="submit">Add new Task</button>
      </form>
      
    </div>
  )
}
export default TodoForm