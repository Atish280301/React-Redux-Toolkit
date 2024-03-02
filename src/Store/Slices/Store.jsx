import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./UserSlice";
const Store = configureStore({
    reducers : {
        users: UserSlice,
    }
})
export default Store;