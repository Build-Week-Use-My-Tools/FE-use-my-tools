import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = (props) => {
    return (
        <div>
            <div className="navigation">
                <div>
                    <NavLink to="/mainpage">Main Page</NavLink>
                </div>
                <button onClick={() => {props.props.history.push('/createowner')}}>Become an Owner</button>
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