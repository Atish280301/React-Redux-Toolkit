import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveUser } from "../Store/Slices/UserSlice";
const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>{
        return state.users
    })
    console.log(data);
    const DeleteUser = (id) => {
        dispatch(RemoveUser(id));
    }
    return (<>
        <div>
            {
                data.map((user, id)=>{
                    return  <div key={id}>
                        <p>{user}</p>
                        <button onClick={()=>DeleteUser(id)}>X</button>
                    </div>
                })
            }
        </div>
    </>);
}
export default DisplayUsers;