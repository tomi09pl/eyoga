import React from 'react'
import { ScrollTo } from "react-scroll-to";
import {Link} from "react-router-dom";

const goToTop = () => {
    document.documentElement.scrollTop = 0
};

const Footer = () => (
    <footer className="page-footer">
        <ul className="footer-nav-list">
            <li><ScrollTo>
                {({scroll}) => (
                    <a onClick={() => scroll({x:0,y:0,smooth:true})}>Home</a>
                )}</ScrollTo></li>
            {/*<li><a href="#">Home</a></li>*/}

            <li><ScrollTo>
                {({scroll}) => (
                    <a onClick={() => scroll({x:0,y:612,smooth:true})}>Info</a>
                )}</ScrollTo></li>
            {/*<li><a href="#">Info</a></li>*/}
            <li><Link to='/form' onClick={goToTop}>Planner</Link></li>
            <li><a href="#">Shop</a></li>
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