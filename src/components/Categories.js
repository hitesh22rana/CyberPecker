import './Categories.css'
import { Link } from "react-router-dom";
import React from 'react'
import '../colorToggle.css';

function Categories({sidebar , bgmode}) {
    return (
        <section className={sidebar === true ? 'categories-container active' : 'categories-container'}>
            <div className="categories">
                <div className={bgmode === true ? 'light-mode-categories-list' : 'dark-mode-categories-list'}>
                    <Link to="/">Home</Link>
                    <Link to="/dataBreach">Data Breach News</Link>
                    <Link to="/cyberAttack">Cyber Attack News</Link>
                    <Link to="/vulnerability">Vulnerability News</Link>
                    <Link to="/malware">Malware News</Link>
                    <Link to="/security">Security News</Link>
                    <Link to="/privacy">Privacy News</Link>
                    <Link to="/crypto">Crypto News</Link>
                    <Link to="/cloud">Cloud News</Link>
                    <Link to="/tech">Tech News</Link>
                    <Link to="/iot">IOT News</Link>
                    <Link to="/bigData">BigData news</Link>
                    <Link to="/business">Business news</Link>
                    <Link to="/mobility">Mobility news</Link>
                    <Link to="/research">Research news</Link>
                    <Link to="/corporate">Corporate news</Link>
                    <Link to="/socialMedia">Social Media news</Link>
                </div>
            </div>
            </section>
    )
}

export default Categories