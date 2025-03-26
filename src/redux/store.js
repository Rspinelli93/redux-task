import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './todosSlice.js';

export const store = configureStore({
    reducer: {
        tasks: taskSlice,
    },
});
