import React from "react";
import { useSelector } from "react-redux";
const DisplayUsers = () => {
    const data = useSelector((state)=>{
        return state.users
    })
    console.log(data);
    return (<>
        <div>
            {
                data.map((user, id)=>{
                    return  <div key={id}>
                        <p>{user}</p>
                        <button>X</button>
                    </div>
                })
            }
        </div>
    </>);
}
export default DisplayUsers;