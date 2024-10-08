import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../slices/todoSlice';
import counterSlice from '../slices/counterSlice';

export const store =   configureStore({
    reducer : {
        todoApp : todoSlice , 
        counterApp : counterSlice 
    }
})

