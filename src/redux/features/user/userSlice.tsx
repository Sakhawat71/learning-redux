import { TUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type TUserState = {
    users: TUser[];
}

const initialState: TUserState = {
    users: []
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
        // removeUser: () => { },
    }
});

export const {
    addUser,
} = userSlice.actions;
export default userSlice.reducer;