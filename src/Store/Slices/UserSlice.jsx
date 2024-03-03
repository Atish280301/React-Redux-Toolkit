import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
    name: "Users",
    initialState: [],
    reducers: {
        AddUser (state, action) {
            state.push(action.payload);
            console.log(action.payload);
        },
        RemoveUser (state, action) {},
        DeleteUsers (state, action) {}
    }
});
export default UserSlice.reducer;
export const { AddUser, RemoveUser, DeleteUsers } = UserSlice.actions;