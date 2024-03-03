import { createSlice } from "@reduxjs/toolkit";
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
        DeleteUsers (state, action) {}
    }
});
export default UserSlice.reducer;
export const { AddUser, RemoveUser, DeleteUsers } = UserSlice.actions;