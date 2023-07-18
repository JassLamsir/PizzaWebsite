import React, { useState } from 'react';
import pizza from "../assets/pizza.png";
import Reorder2 from "../assets/reorder2.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
const [openLinks, setOpenLinks] = useState(false);

const toggleNavbar = () => {
    setOpenLinks(!openLinks);
};
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src= {pizza} />
                 <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                </div> 
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <img height='100' src={Reorder2}/>
                </button>
            </div>
        </div>
    )
}

export default Navbar

