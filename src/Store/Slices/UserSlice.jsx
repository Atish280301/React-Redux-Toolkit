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
export {UserSlice};