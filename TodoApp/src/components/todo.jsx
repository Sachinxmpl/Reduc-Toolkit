import React from 'react'
import Addtodo from './Addtodo'
import { Box, Button, Stack, Typography  , Paper} from '@mui/material'
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo , toggleComplete } from '../slices/todoSlice'

const Todo = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todoApp.todos)

    return (
        <Box sx={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '2rem',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            <Stack spacing={3}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center' }}>Todo App</Typography>
                <Addtodo />
                {todos.map((todo) => (
                    <Paper key={todo.id} elevation={2} sx={{
                        padding: '1rem',
                        backgroundColor: '#fff',
                        borderRadius: '4px',
                    }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: '#333',
                                    textDecoration: todo.completed ? 'line-through' : 'none'
                                }}
                            >
                                {todo.title}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Button 
                                    variant="contained" 
                                    color={todo.completed ? "success" : "primary"}
                                    onClick={() => dispatch(toggleComplete(todo.id))}
                                >
                                    {todo.completed ? "Completed" : "Mark Done"}
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    color="error"
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                >
                                    Delete
                                </Button>
                            </Stack>
                        </Stack>
                    </Paper>
                ))}
            </Stack>
        </Box>
    )
}



export default Todo