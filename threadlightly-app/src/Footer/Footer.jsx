import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="tagline-container">
                    <h2 className="tagline">Choose threads that weave a greener</h2>
                    <h2 className="tagline">tomorrow</h2>
                    <button className="signup-button">Sign up</button>
                </div>
            </div>
            <div className="footer-content">
                <div className="footer-brand">
                    <h1>thread lightly</h1>
                    <p>Green Garments • Global Goodness</p>
                    {/* Insert social icons here */}
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <a href="/about">About Us</a>
                        <a href="/careers">Careers</a>
                        <a href="/blog">Blog</a>
                        <a href="/pricing">Pricing</a>
                    </div>
                    <div className="footer-column">
                        <h4>Product</h4>
                        <a href="/invoicing">Invoicing</a>
                        <a href="/contract">Contract</a>
                        <a href="/accounting">Accounting</a>
                        <a href="/proposal">Proposal</a>
                    </div>
                    <div className="footer-column">
                        <h4>Resources</h4>
                        <a href="/proposal-template">Proposal Template</a>
                        <a href="/invoice-template">Invoice Template</a>
                        <a href="/tutorial">Tutorial</a>
                        <a href="/write-contract">How to write a contract</a>
                    </div>
                    <div className="footer-column">
                        <h4>Contact Us</h4>
                        <p>threadlightly@gmail.com</p>
                        <p>+92-311-689-2135</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024. All Rights Reserved to the ripple effect.</p>
            </div>
        </footer>
    );
}

export default Footer;
