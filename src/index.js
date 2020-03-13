import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//======================================================================//
//=============== Header onScroll color change =========================//
//======================================================================//
//przenisc to do osobnego pliku i zaimportowac tutaj!
const bodyTag = document.querySelector('body');
const header = document.querySelector('.page-header');
// const nav = document.querySelector('.main-nav-list');

let scrolled = () => {
    let dec = window.scrollY / (bodyTag.scrollHeight - window.innerHeight);
    return Math.floor(dec*100);
};

window.addEventListener('scroll', () => {
    header.style.setProperty('background-color', scrolled() > 0 ? "#353b48" : "#353b481A");
    // nav.style.setProperty('background-color', scrolled() > 0 ? "#353b48" : "");
});
//======================================================================//
//======================================================================//
//======================================================================//

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
