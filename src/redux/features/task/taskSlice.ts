import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface ITaskState {
    task : ITask[];
};

const initialState : ITaskState = {
    task: [
        {
            id: 'id-01',
            title: 'Initialize Frontend',
            description: 'create a new react app',
            dueDate: '2025-01-31',
            isCompleted: false,
            priority: 'high',
            createdAt: '',
            updatedAt: '',
        },
        {
            id: 'id-02',
            title: 'Initialize Backend',
            description: 'create a new express app',
            dueDate: '2025-01-31',
            isCompleted: false,
            priority: 'high',
            createdAt: '',
            updatedAt: '',
        },
        {
            id: 'id-03',
            title: 'Initialize Database',
            description: 'create a new postgres db',
            dueDate: '2025-01-31',
            isCompleted: false,
            priority: 'high',
            createdAt: '',
            updatedAt: '',
        },
        {
            id: 'id-04',
            title: 'Initialize Deployment',
            description: 'deploy the app to heroku',
            dueDate: '2025-01-31',
            isCompleted: false,
            priority: 'high',
            createdAt: '',
            updatedAt: '',
        }
    ]
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
});

export default taskSlice.reducer;