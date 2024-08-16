import React from "react";
import addtodo from "./addtodo";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <>
            <addtodo />
            <div>todo</div>
        </>
    );
};

export default Todo;
