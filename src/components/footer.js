import React from 'react'

const Footer = () => (
    <footer className="page-footer">
        <ul className="footer-nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Exercises</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Info</a></li>
        </ul>

        <div className="footer-talk-to-us">
            <div className="footer-txt">Health at the reach of your <span>eyesight.</span></div>
            <button className="footer-btn">TALK TO US</button>
            <div>
                <a href="https://www.facebook.com/" target="_blank" className="fab fa-facebook-f"></a>
                <a href="https://twitter.com/" target="_blank" className="fab fa-twitter"></a>
                <a href="https://www.instagram.com/" target="_blank" className="fab fa-instagram"></a>
            </div>
        </div>
    </footer>
);

export default Footer;