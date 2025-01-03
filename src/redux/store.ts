import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';
import taskReducer from './features/task/taskSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasks : taskReducer,
    }

});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;