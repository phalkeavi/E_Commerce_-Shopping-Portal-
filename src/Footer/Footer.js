import React from 'react';
import './Footer.css';
import Logo from './Logo_Avinova1.JPG';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={Logo} alt="logo" />
            </div>

            <div className="footer-links">
                <a href="/">Conditions Of Ussse & Sale</a>
                <a href="/privacy-notice">Privacy Notice</a>
                <a href="/">Interes-Based Ads</a>
                </div>
                

            <div className="footer-copy">
                © 2025- Present, Avinova.com created by Avinash_Phalke, Inc. or its affiliates
                </div>
        </footer>
    );
}

export default Footer;