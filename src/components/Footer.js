import React from 'react';
import './Footer.css';
import * as FaIcons from 'react-icons/fa';
import logo from '../logo.png';

function Footer( { bgmode } ) {

    return (
        <section className={`footer-section ${bgmode === true ? "light-mode-footer-section" : "dark-mode-footer-section"}`}>
            <div className="footer-content">
                <div className="footer-left">
                    <img src={logo} alt="logo" />
                    <div className="copyright">
                        Copyright &copy; 2022 CyberPecker.<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All Rights Reserved.
                    </div>
                </div>
                <div className="footer-contact">
                    <a className={bgmode === true ? "light-footer-content" : "dark-footer-content"} href="https://github.com/hitesh22rana/CyberPecker" target='_blank' rel = "noopener noreferrer"><FaIcons.FaGithub/></a>
                    <a className={bgmode === true ? "light-footer-content" : "dark-footer-content"} href="https://www.linkedin.com/in/hitesh-rana-108983201/" target='_blank' rel = "noopener noreferrer"><FaIcons.FaLinkedinIn/></a>
                </div>
            </div>
        </section>
    )
}

export default Footer
