import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../Actions/CrAction";
const UserSlice = createSlice({
    name: "Users",
    initialState: [],
    reducers: {
        AddUser (state, action) {
            state.push(action.payload);
            console.log(action.payload);
        },
        RemoveUser (state, action) {
            console.log(action.payload);
            state.splice(action.payload, 1);
        },
        DeleteUsers (state, action) {
            return [];
        },
    },
    extraReducers(builder) {
        builder.addCase(clearAllUsers, () => {
            return [];
        })
    }
});
export default UserSlice.reducer;
export const { AddUser, RemoveUser} = UserSlice.actions;