import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [
        {
            id : nanoid(),
            title : "Todo 1",
            completed : false
        }
    ]
}

const todoSlice = createSlice({
    name : "todos",
    initialState , 
    reducers : {
        addTodo : (state , action ) =>{
            state.todos.push({
                id :nanoid() , 
                title : action.payload,
                completed : false
            })
        } , 
        removeTodo : (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        } , 
        toggleComplete : (state , action) => {
            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    return {
                        ...todo , 
                        completed : !todo.completed
                    }
                }
                else {
                    return todo 
                }
            })
        }
    }
})

export const {addTodo , removeTodo , toggleComplete} = todoSlice.actions
export default todoSlice.reducer