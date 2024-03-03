import React from "react";
import DeleteUser from "./DeleteUser";
import { fakeuserdata } from "../API/Data";
import { useDispatch } from "react-redux";
import { AddUser } from "../Store/Slices/UserSlice";
import DisplayUsers from "./DisplayUsers";
const UserDetail = () => {
    const dispatch = useDispatch();
    const addNewUser = (name) => {
        console.log(name);
        dispatch(AddUser(name));
    }
    return (
        <>
            <div style={{"border":"2px solid blue", "margin" : "10px"}}>
                <div style={{"border":"2px solid red", "margin" : "10px"}}>
                    <div>List Of User Details</div>
                    <button onClick={()=>addNewUser(fakeuserdata())}>Add New Users</button>
                </div>
                <div style={{"border":"2px solid purple", "margin" : "10px"}}>
                    <DisplayUsers />
                </div>
                <hr />
                <div>
                    <DeleteUser />
                </div>
            </div>
        </>
    );
}
export default UserDetail;