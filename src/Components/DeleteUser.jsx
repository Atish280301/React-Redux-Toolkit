import React from "react";
// import { DeleteUsers } from "../Store/Slices/UserSlice";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../Store/Actions/CrAction";
const DeleteUser = () => {
    const dispatch = useDispatch();
    const DeleteAll = () => {
        dispatch(clearAllUsers())
    }
    return (
        <>
            <div>
                <button onClick={DeleteAll}>Delete All</button>
            </div>
        </>
    );
}
export default DeleteUser;