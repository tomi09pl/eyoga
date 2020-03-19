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
const section3_h3 = document.querySelector('.section3-h3');
const section3_h1 = document.querySelector('.section3-h1');
const section3_p = document.querySelector('.section3-p');
const section3_a = document.querySelector('.section3-a');
// const nav = document.querySelector('.main-nav-list');
const section4_h3 = document.querySelector('.section4-h3');
const section4_h1 = document.querySelector('.section4-h1');
const section4_div = document.querySelector('.section4-wrapper');
// const section4_a = document.querySelector('.section4-a');


let scrolled = () => {
    let dec = window.scrollY / (bodyTag.scrollHeight - window.innerHeight);
    console.log(Math.floor(dec*100));
    return Math.floor(dec*100);
};

window.addEventListener('scroll', () => {
    // header.style.setProperty('background-color', scrolled() > 0 ? "#353b48" : "#353b481A");
    header.style.setProperty('background-color', scrolled() > 0 ? "#ECE7E7" : "#353b481A");
    header.style.setProperty('box-shadow', scrolled() > 0 ? "0 4px 8px 0 rgba(0, 0, 0, 0.2)" : "");
    //=======================================================================//
    if (section3_h3 && section3_h1 && section3_p && section3_a) {
        section3_h3.style.setProperty('display', scrolled() >= 71 ? "" : "none");
        section3_h3.classList.toggle('slide-in-left', scrolled() >= 71);

        section3_h1.style.setProperty('display', scrolled() >= 73 ? "" : "none");
        section3_h1.classList.toggle('slide-in-left', scrolled() >= 73);

        section3_p.style.setProperty('display', scrolled() >= 75 ? "" : "none");
        section3_p.classList.toggle('slide-in-left', scrolled() >= 75);

        section3_a.style.setProperty('display', scrolled() >= 76 ? "" : "none");
        section3_a.classList.toggle('slide-in-left', scrolled() >= 76);

        window.removeEventListener('scroll', ()=>{});
    };
    //=======================================================================//
    // if (section4_h3 && section4_h1 && section4_div) {
    //
    //     section4_h3.style.setProperty('display', scrolled() > 30 ? "" : "none");
    //     section4_h3.classList.toggle('slide-in-right', scrolled() > 40);
    //
    //     section4_h1.style.setProperty('display', scrolled() > 48 ? "" : "none");
    //     section4_h1.classList.toggle('slide-in-right', scrolled() > 48);
    //
    //     section4_div.style.setProperty('display', scrolled() > 51 ? "" : "none");
    //     section4_div.classList.toggle('slide-in-right', scrolled() > 51);
    //
    //     // section4_a.style.setProperty('display', scrolled() > 54 ? "" : "none" );
    //     // section4_a.classList.toggle('slide-in-right', scrolled() > 54 );
    // };
});
//======================================================================//
//======================================================================//
//======================================================================//

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
