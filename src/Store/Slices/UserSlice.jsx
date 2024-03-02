import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
    name: "Users",
    initialState: [],
    reducers: {
        AddUser (state, action) {},
        RemoveUser (state, action) {},
        DeleteUsers (state, action) {}
    }
})
export const { AddUser, RemoveUser, DeleteUsers } = UserSlice.actions;
export default UserSlice.reducer;