import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
    reducer: counterReducer,
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;