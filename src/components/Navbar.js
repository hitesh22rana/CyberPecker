import React, { Component } from 'react'
import './Navbar.css'
import logo from '../logo.png';
import { Link } from "react-router-dom";

export class Navbar extends Component {

    render() {
        return (
            <section id="nav-bar-container">
                <nav className="nav-bar">
                    <div className="left-nav-bar">
                        <img id="logo" src={logo} alt="logo" />
                        <Link to="/">CyberPecker</Link>
                    </div>
                    <div className="right-nav-bar">
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                    </div>
                </nav>
            </section>
        )
    }
}

export default Navbar
