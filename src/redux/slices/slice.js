import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name:'slice',
    initialState:[],
    reducers:{
        addTodo:(state, action)=>{
            state.push(action.payload)
        },
        toggleTodo:(state, action)=>{
            const todo = state.find(todo => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        },
        deleteTodo:(state, action)=>{
            state.filter(todo=> todo.id !== action.payload)
        },
    }
})