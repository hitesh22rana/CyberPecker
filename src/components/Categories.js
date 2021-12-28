import React, { Component } from 'react'
import './Categories.css'
import { Link } from "react-router-dom";

export class Categories extends Component {
    render() {
        return (
            <section className="categories-container">
                <div className="categories">
                    <div className="categories-list">
                        <Link to="/dataBreach">Data Breach</Link>
                        <Link to="/cyberAttack">Cyber Attack</Link>
                        <Link to="/vulnerability">Vulnerability</Link>
                        <Link to="/malware">Malware</Link>
                        <Link to="/security">Security</Link>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/crypto">Crypto</Link>
                        <Link to="/cloud">Cloud</Link>
                        <Link to="/tech">Tech</Link>
                        <Link to="/iot">IOT</Link>
                        <Link to="/bigData">BigData</Link>
                        <Link to="/business">Business</Link>
                        <Link to="/mobility">Mobility</Link>
                        <Link to="/research">Research</Link>
                        <Link to="/corporate">Corporate</Link>
                        <Link to="/socialMedia">Social Media</Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default Categories
