import React from 'react';
import {Link} from "react-router-dom";

const Header = () =>(

    <header className="page-header sticky">
        <span className="page-header-logo">
            <span className="page-header-logo left">Eyes&nbsp;</span>
            <span className="page-header-logo right">Yoga</span>
        </span>

        <nav className="main-nav">
            <ul className="main-nav-list">
                <li><Link exact to='/'>Home</Link></li>
                <li><Link to='/'>Info</Link></li>
                <li><Link to='/form'>Planner</Link></li>
                <li><Link to='/'>Shop</Link></li>
                <li><Link to='/'>Contact</Link></li>

                <button className="main-nav-toggle-show" aria-label="showMenu" onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </ul>

            <button className="main-nav-toggle" aria-label="showMenu" onClick={showMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>
);

function showMenu() {
    const menu = document.querySelector('.main-nav-list');
    menu.classList.toggle('show');
}

export default Header;