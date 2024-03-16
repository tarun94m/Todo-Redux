import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"counterSlice",
    initialState:{
        count:5
    },
    
    // all the update logic
    reducers: {
        
        //In that state we will get the initial state initially and that is updated
        increment : (state) => {
            state.count += 1; 
        },
        decrement : (state) => {
            state.count -= 1; 
        }
    }
});

export default counterSlice;