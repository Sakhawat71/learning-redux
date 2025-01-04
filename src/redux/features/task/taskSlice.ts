import { rootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITaskState {
    tasks : ITask[];
    filter : 'all' | 'high' | 'medium' | 'low';
};

const initialState : ITaskState = {
    tasks: [
        {
            id: 'id-01',
            title: 'Initialize Frontend',
            description: 'create a new react app',
            dueDate: '2025-01-31',
            isCompleted: false,
            priority: 'medium',
        }
    ],
    filter : 'all',
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action : PayloadAction<ITask>) => {
            console.log(action.payload);
            const id = Math.random().toString(36).substr(2, 9);

            const taskData = {
                ...action.payload,
                isCompleted: false,
                id,
            }
            state.tasks.push(taskData);
        }
    },
});

export const selectTasks = (state: rootState) => state.todo;
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;