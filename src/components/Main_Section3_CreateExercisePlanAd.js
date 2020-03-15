import React from 'react';
import {ParallaxBanner} from 'react-scroll-parallax';
import img1 from '../img/section3-alexei-scutari.jpg'
import img2 from '../img/section3-diego-jimenez.jpg'


const ExPlanAd = () => {

return(
    <div>
    <ParallaxBanner
        className="section3-parallax"
        layers={[
            {image: img1, amount: 0.6},
            // {image: img2, amount: 0.2,}
            ]}
        style={{height: '500px'}}
    >
        <h3 className="section3-h3">EXERCISE PLAN</h3>
        <h1 className='section3-h1'>Create your own customised exercise plan</h1>
        <p className='section3-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae consectetur excepturi, expedita laudantium maiores molestias officia sint tempore totam vitae voluptates! Adipisci asperiores beatae consectetur doloribus esse ipsum nam nihil placeat quae, quisquam, quo, quos velit! Aliquam aspernatur beatae commodi labore minus nam necessitatibus quo ut. Alias cupiditate harum iusto maiores recusandae. Dignissimos magnam maiores qui saepe suscipit tempore temporibus vero. Beatae blanditiis commodi consequatur debitis ducimus ea error exercitationem, harum incidunt, inventore maxime molestiae nam nesciunt nostrum porro quae quaerat quam quasi quia ratione reprehenderit sequi similique unde vero vitae voluptas, voluptate voluptatum. Beatae itaque laborum nostrum officiis.</p>
        <a className='section3-a' href='#'>GO TO PLANNER</a>
    </ParallaxBanner>
    </div>
)
};

export default ExPlanAd;