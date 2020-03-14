import React from 'react';
import {ParallaxBanner} from 'react-scroll-parallax';
import img1 from '../img/section3-alexei-scutari.jpg'
import img2 from '../img/section3-diego-jimenez.jpg'


const ExPlanAd = () => {

return(
    <div>
    <ParallaxBanner
        className="your-class"
        layers={[
            {image: img1, amount: 0.6},
            // {image: img2, amount: 0.2,}
            ]}
        style={{height: '500px'}}
    >
        <h3 className="section3-h3">Exercise plan</h3>
        <h1 className='section3-h1'>Create your own exercise plan</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </ParallaxBanner>
    </div>
)
};

export default ExPlanAd;