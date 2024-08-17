import { configureStore } from "@reduxjs/toolkit";
import IssueReducer from "../slices/issue";

export const store = configureStore({
    reducer : {
        issue : IssueReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch