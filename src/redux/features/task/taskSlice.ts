import { rootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface ITaskState {
    tasks : ITask[];
    filter : 'all' | 'high' | 'medium' | 'low';
};

// type DraftTask = Partial<ITask>;
type DraftTask = Pick<ITask, 'title' | 'description' | 'dueDate' | 'priority'>;

const createTask = (draftTask : DraftTask) : ITask => {
    return {
        id: nanoid(),
        isCompleted: false,
        ...draftTask,
    };
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
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        },
        toggleCompleteState : (state, action : PayloadAction<string>) => {
            console.log(action);
        }
    },
});

export const selectTasks = (state: rootState) => state.todo;
export const { addTask } = taskSlice.actions;
export const { toggleCompleteState } = taskSlice.actions;
export default taskSlice.reducer;