import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            if (task) task.done = !task.done;
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        }
    }
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
