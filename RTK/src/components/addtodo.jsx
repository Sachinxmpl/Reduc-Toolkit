import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const addtodo = () => {
    const [input , setInput] = React.useState("")
    const dispatch = useDispatch()
    
    const addtodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <form onSubmit={addtodoHandler}>
        <input type="text" placeholder='Add Todo' 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
        />
        <button type='submit'>Add</button>
    </form>
  )
}

export default addtodo