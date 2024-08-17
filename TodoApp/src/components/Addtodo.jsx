import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slices/todoSlice'

const Addtodo = () => {

    const dispatch = useDispatch()

    const [input , setInput] = React.useState('')

    const handleAddTodo = () =>{
            dispatch(addTodo(input))
            setInput('')
    }

    return (
      <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', borderRadius: 2, marginBottom: 2 }}>
        <Stack direction="row" spacing={2}>
          <TextField 
            variant="outlined" 
            label="Add Todo" 
            fullWidth 
            sx={{ backgroundColor: 'white' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ minWidth: '100px' }}
            onClick={handleAddTodo}
          >
            Add
          </Button>
        </Stack>
      </Box>
    )
  }

export default Addtodo