import React from 'react';
import { Slide } from 'react-slideshow-image';
import img1 from '../img/ashley-batz-betm.jpg';
import img2 from '../img/eneko-urunuela-unsplash.jpg';
import img3 from '../img/simon-migaj.jpg';
import img4 from '../img/v2osk.jpg';


const slideImages = [
    img1,
    img2,
    img3,
    img4
    // '../img/ashley-batz-betm.jpg',
    // '../img/eneko-urunuela-unsplash.jpg',
    // '../img/simon-migaj.jpg',
    // '../img/v2osk.jpg'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
};

const Slideshow = () => {
    return (
        <Slide {...properties}>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    <span>Lorem ipsum dolor sit amet.</span>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    <span>Consectetur adipiscing elit.</span>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    <span>Ut enim ad minim veniam.</span>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                    <span>Duis aute irure dolor.</span>
                </div>
            </div>
        </Slide>
    )
};

export default Slideshow;
