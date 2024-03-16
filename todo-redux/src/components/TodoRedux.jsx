import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import TodoSlice from "./TodoSlice";

const actions=TodoSlice.actions;

function TodoRedux(){

    const {value, todoList}=useSelector((store)=>{
        return store.todoState;
    })

    const dispatch=useDispatch();

    const handleChange=(e)=>{
        const updatedValue=e.target.value;
        dispatch(actions.setValue(updatedValue));   
    }

    const handleAddTask=(e)=>{
        dispatch(actions.addtask(value));
    }

    return(
        <>
            <h2>Todo</h2>
            <div style={{display:"flex"}}>
                <div className="inputBox">
                    <input type="text" 
                    value={value}
                    onChange={handleChange}/>
                    <button onClick={handleAddTask}>Add Task</button>
                </div>

                <div className="list">
                    <ul>
                        {list.map((taks, idx)=>{
                            return  <li key={idx}>{task}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoRedux;