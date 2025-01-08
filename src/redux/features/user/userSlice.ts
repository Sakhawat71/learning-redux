import { rootState } from "@/redux/store";
import { TUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type TUserState = {
    users: TUser[];
}

const initialState: TUserState = {
    users: [{
        id: 'adslhfl',
        name: 'world'
    }]
};

type TDraftData = Pick<TUser, 'name'>

const createUser = (data: TDraftData): TUser => {
    return {
        id: nanoid(),
        ...data
    };
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<TUser>) => {
            const userData = createUser(action.payload);
            state.users.push(userData)
        },
        removeUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(
                (user) => user.id !== action.payload
            );
        },
    }
});

export const selectUser = (state: rootState) => state.user;
export const {
    addUser,
    removeUser,
} = userSlice.actions;
export default userSlice.reducer;