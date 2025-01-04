import { rootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

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
        },
        {
            id: 'id-02',
            title: 'Initialize Backend',
            description: 'create a new express app',
            dueDate: '2025-01-31',
            isCompleted: false,
            priority: 'high',
        },
        {
            id: 'id-03',
            title: 'Initialize Database',
            description: 'create a new postgres db',
            dueDate: '2025-01-31',
            isCompleted: false,
            priority: 'medium',
        },
        {
            id: 'id-04',
            title: 'Initialize Deployment',
            description: 'deploy the app to heroku',
            dueDate: '2025-01-31',
            isCompleted: false,
            priority: 'low',
        }
    ],
    filter : 'all',
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload);
            state.tasks.push(action.payload);
        }
    },
});

export const selectTasks = (state: rootState) => state.todo;
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;