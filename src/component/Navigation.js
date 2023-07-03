import React from "react";
import "../css/Navigation.css";
import Home from "./Home";
import About from "./About";
import Sign from "./Sign";

const Navigation=()=>{
    return (<>
    <ul className="header">
        <li className="header-list"><a href="./"><Home/></a></li>
        <li className="header-list"><a href="./about"><About/></a></li>
        <li className="header-list"><a href="./sign"><Sign/></a></li>
    </ul>
    </>)
}
export default Navigation;