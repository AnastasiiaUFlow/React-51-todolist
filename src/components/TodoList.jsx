import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { addTodo, deleteTodo } from "../redux/slices/slice";
import React, { useState } from 'react'

const TodoList = () =>{
    const [inputValue, setInputValue] = useState('');
    const todos = useSelector((state)=>state.todos.items)
}
return(
    <div>
        <title>Todo List</title>
        <ul>
            <li>{todos.map((todo)=>(<TodoItem key={todo.id} todo={todo} />))}</li>
        </ul>
    </div>
)
export default TodoList