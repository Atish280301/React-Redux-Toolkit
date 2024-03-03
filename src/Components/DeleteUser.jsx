import React from "react";
import { DeleteUsers } from "../Store/Slices/UserSlice";
import { useDispatch } from "react-redux";
const DeleteUser = () => {
    const dispatch = useDispatch();
    const DeleteAll = () => {
        dispatch(DeleteUsers())
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