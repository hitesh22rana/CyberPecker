import './Navbar.css'
import logo from '../logo.png';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import React from 'react'
import { useState } from 'react';
import '../colorToggle.css';

function Navbar({setSidebar , sidebar , setBgMode , bgmode}) { 
    
    const [icon, seticon] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
        seticon(!icon);
    }

    const toggleBgMode = () => {
        setBgMode(!bgmode);
    }

    return (
        <section id="nav-bar-container" className={bgmode === true ? 'light-mode-navbar' : 'dark-mode-navbar'}>
            <nav className="nav-bar">
                <div className="left-nav-bar">
                    <img id="logo" src={logo} alt="logo" />
                    <Link to="/">CyberPecker</Link>
                </div>

                <div className="right-nav-bar"> 
                    <label className="switch">
                        <input type="checkbox" onClick={toggleBgMode}/>
                        <span className="slider round"></span>
                    </label>
                    {icon === true ? <FaIcons.FaTimes onClick={showSidebar} /> : <FaIcons.FaBars onClick={showSidebar} />}
                </div>
            </nav>
        </section>
    )
}

export default Navbar