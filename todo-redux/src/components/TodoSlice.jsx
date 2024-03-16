import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name: "toolbox",
    initialState:{
        value:"",
        todoList:[]
    },

    reducers:{
        setValue:(state, desObj)=>{
            console.log("I am set value", desObj.payload);
            state.value=desObj.payload;
            state.value="";
        },

        addtask: (state, desObj)=>{
            const task=desObj.payload;
            let newTaskArr=[...state.todoList, task];
            state.todoList=newTaskArr;
                   }
    }
});

export default TodoSlice;