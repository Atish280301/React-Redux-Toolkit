import React from "react";
import DeleteUser from "./DeleteUser";
const UserDetail = () => {
    return (
        <>
            <div style={{"border":"2px solid blue", "margin" : "10px"}}>
                <div style={{"border":"2px solid red", "margin" : "10px"}}>
                    <div>List Of User Details</div>
                    <button>Add New Users</button>
                </div>
                <div style={{"border":"2px solid purple", "margin" : "10px"}}>
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