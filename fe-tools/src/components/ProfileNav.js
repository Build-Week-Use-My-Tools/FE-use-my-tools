import React from "react";
import {NavLink} from "react-router-dom";

const ProfileNav = (props) => {
    return (
        <div>
            <div className="navigation">
                <div>
                    <NavLink to="/mainpage">Main Page</NavLink>
                </div>
                <div>
                    <NavLink to="/">Sign Out</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProfileNav;