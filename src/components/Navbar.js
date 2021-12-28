import './Navbar.css'
import logo from '../logo.png';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import React from 'react'
import { useState } from 'react';

function Navbar({setSidebar , sidebar}) { 
    
    const [icon, seticon] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
        seticon(!icon);
    }

    return (
        <section id="nav-bar-container">
            <nav className="nav-bar">
                <div className="left-nav-bar">
                    <img id="logo" src={logo} alt="logo" />
                    <Link to="/">CyberPecker</Link>
                </div>
                <div className="right-nav-bar"> 
                    {icon === true ? <FaIcons.FaTimes onClick={showSidebar} /> : <FaIcons.FaBars onClick={showSidebar} />}
                </div>
            </nav>
        </section>
    )
}

export default Navbar