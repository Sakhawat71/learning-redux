import { rootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

interface ITaskState {
    tasks: ITask[];
    filter: 'all' | 'high' | 'medium' | 'low';
};


type DraftTask = Pick<ITask, 'title' | 'description' | 'assignTo' | 'dueDate' | 'priority'>;

const createTask = (draftTask: DraftTask): ITask => {
    return {
        ...draftTask,
        id: nanoid(),
        isCompleted: false,
        assignTo: draftTask.assignTo ? draftTask.assignTo : null
    };
};

const initialState: ITaskState = {
    tasks: [
        {
            id: 'id-01',
            title: 'Initialize Frontend',
            description: 'create a new react app',
            dueDate: '2025-01-31',
            isCompleted: false,
            assignTo: null,
            priority: 'medium',
        }
    ],
    filter: 'all',
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            // console.log(action.payload);
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            // console.log(action.payload);
            state.tasks.forEach((task) => task.id === action.payload
                ? (task.isCompleted = !task.isCompleted)
                : task
            )
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((state) => state.id !== action.payload)
        },
        updateFilter: (state, action: PayloadAction<"medium" | "high" | "low" | "all"
        >) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(removeUser, (state, action) => {
            state.tasks.forEach((task) => task.assignTo == action.payload ? (task.assignTo = null) : task)
        });
    },
});

export const selectTasks = (state: rootState) => {

    const { filter, tasks } = state.todo;
    const filteredTasks =
        filter === 'all' ? tasks : tasks.filter((task) => task.priority === filter);
    return { tasks: filteredTasks };
};

export const {
    addTask,
    toggleCompleteState,
    deleteTask,
    updateFilter
} = taskSlice.actions;
export default taskSlice.reducer;