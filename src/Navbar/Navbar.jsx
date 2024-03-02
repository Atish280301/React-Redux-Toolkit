import React from "react";
const Navbar = () => {
    return (
        <>
            <div>
                <div>
                    <h1>Project Heading</h1>
                </div>
                <div style={{"display" : "flex"}}>
                    <div style={{"margin":"10px"}}>Home</div>
                    <div style={{"margin":"10px"}}>About</div>
                    <div style={{"margin":"10px"}}>Projects</div>
                    <div style={{"margin":"10px"}}>Code</div>
                    <div style={{"margin":"10px"}}>Contact</div>
                </div>
            </div>
        </>
    );
}
export default Navbar;