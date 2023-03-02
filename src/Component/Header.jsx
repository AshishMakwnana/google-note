import React from "react";
import Logo from "../images/OIP.jpeg";

const Header =()=>{
    return(
        <header>
            <img className="logo" src={Logo} alt="Logo" width="70" height="30"/>
            <h1 className="h__heading">My notes</h1>
        </header>
    );
}

export default Header;