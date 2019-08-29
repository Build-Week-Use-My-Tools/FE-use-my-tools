import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = (props) => {
    return (
        <div>
            <div className="navigation">
                <div>
                    <NavLink to="/mainpage">Main Page</NavLink>
                </div>
                <NavLink to="/createowner" className="ownerbutton" >Become an Owner</NavLink>
                <div>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/">Sign Out</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;