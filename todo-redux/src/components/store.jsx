import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import counterSlice from "./CounterSlice";


const store=configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer
    }
});

export default store;