import { createSlice , nanoid} from "@reduxjs/toolkit";

const initailState = {
    todos : [
        {
            id : nanoid() , 
            text : "TO play tt"
        } , 
        {
            id : nanoid() ,
            text : "To eat food"
        }
    ]
}

export const todoSlice = createSlice({
    name : "todo" , 
    initialState : initailState ,
    reducers : {
        addTodo : (state , action) => {
            const todo = {
                id : nanoid() ,
                text : action.payload
            }
            state.todos.push(todo)
        } ,
        removeTodo : (state , action) =>{
            const todoId = action.payload 
            state.todos = state.todos.filter(todo => todo.id !== todoId)
        }
    }
})

export const {addTodo , removeTodo} = todoSlice.actions
export default todoSlice.reducer

