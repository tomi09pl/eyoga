import React from 'react';

const Header = () =>(
    <header className="page-header">
        <span className="page-header-logo">
            <span className="page-header-logo left">Eye's </span>
            <span className="page-header-logo right">Yoga</span>
        </span>

        <div className="main-nav">
            <ul className="main-nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Exercises</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Info</a></li>
                <li><a href="#">Contact</a></li>

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
        </div>
    </header>
);

function showMenu() {
    const menu = document.querySelector('.main-nav-list');
    menu.classList.toggle('show');
}

export default Header;