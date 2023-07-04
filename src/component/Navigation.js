import React from "react";
import "../css/Navigation.css";
import {NavLink} from "react-router-dom";

const Navigation=()=>{
    return (<>
    <ul className="header">
        <li className="header-list"><NavLink to="/">Home</NavLink></li>
        <li className="header-list"><NavLink to="/about">About</NavLink></li>
        <li className="header-list"><NavLink to="/sign">Sign</NavLink></li>
    </ul>

    
    </>)
}
export default Navigation;