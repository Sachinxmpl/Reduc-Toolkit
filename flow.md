## Why Redux ?

- For state management reducing porp drillling
- For easy debugging
- Centralized state: Keeps all application data in one place, making it easier to track and manage.

Redux Toolkit is a set of opinionated and standardised tools that simplify application development using the Redux state management library.

## Why Redux Toolkit over Redux

- Deining reducer , with Reduc Toolkit you can specify a slice with a few lines of codes to define a reducer instead of defining actions and reduces separately like in Redux
- Redux toolkit included built-in middleware that can handle common tasks like asynchronous code and optimizing performance.
- Redux toolkit includes integration with the Redux DevTools browser extension which makes it easier to bebug and analyse

Store
- Separate place to store all variables / data

Reducers
- Only functions through which we can change the state of variables

State
- state defines the current state of varaibles inside the reducers

Action
- Action acts like the trigger to the reducers functions

# Using redux toolkit basic structure

### step 1 : Create a store

Store a place to store all variables / data
Generally we create a single store for the whole appication and it might have multiple reducers

```javascript
// add reducers todoSlice and counterSlice
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";
import counterSlice from "../slices/counterSlice";

export const store = configureStore({
  reducer: {
    todoApp: todoSlice,
    counterApp: counterSlice,
  },
});
```

### Step 2 : Create a slice

Slice is a collection of reducers and actions that are used to manage a specific part of the application state.
A single application can have multiple slices , for eg todoslice and counterSlice

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      title: "Todo 1",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
```

### step 3 : Wrap the main component with the provider

```javascript
// import the store created
import { store } from "./store";

import { Provider } from "react-redux";
// wrap the main component with the provider
<Provider store={store}>//App component with access to rdux store</Provider>;
```

### step 4 : Use the redux store in the components

To use the redux store in a component, you can use the useSelector , useDispatch hook from the react-redux library.
useSelector hook is used to extract data from the Redux store. It takes a selector function as an argument and returns the selected data from the store.
useDispatch hook is used to dispatch actions to the Redux store. It returns a reference to the dispatch function that can be used to dispatch actions to the store.

```javascript
import React from "react";
import Addtodo from "./Addtodo";
import { Box, Button, Stack, Typography, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../slices/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoApp.todos);

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Stack spacing={3}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#333", textAlign: "center" }}
        >
          Todo App
        </Typography>
        <Addtodo />
        {todos.map((todo) => (
          <Paper
            key={todo.id}
            elevation={2}
            sx={{
              padding: "1rem",
              backgroundColor: "#fff",
              borderRadius: "4px",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  textDecoration: todo.completed ? "line-through" : "none",
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
  );
};

export default Todo;
```
