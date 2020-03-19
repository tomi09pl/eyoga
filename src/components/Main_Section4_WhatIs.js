import React from 'react';
import Collapsible from 'react-collapsible';
import image1 from '../img/section4-d-a-v-i-d-s-o-n-l-u-n-a.jpg';
import image2 from '../img/section4-david-travis.jpg';
import image3 from '../img/section4-nrd.jpg';
import image4 from '../img/section4-processingly.jpg';

const WhatIs = () => {

    return (
        <div className="section4-div">
            <h3 className="section4-h3">WHAT IS EYES YOGA</h3>
            <h1 className='section4-h1'>The Bates Method for Better Eyesight</h1>
            <div className='section4-wrapper'>
                <div className='box1'>
                    <p className='section4-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae
                        consectetur excepturi, expedita laudantium maiores molestias officia sint tempore totam vitae
                        voluptates! Adipisci asperiores beatae consectetur doloribus esse ipsum nam nihil placeat quae,
                        quisquam, quo, quos velit! Aliquam aspernatur beatae commodi labore minus nam necessitatibus quo
                        ut.
                        Alias cupiditate harum iusto maiores recusandae. Dignissimos magnam maiores qui saepe suscipit
                        tempore temporibus vero. Beatae blanditiis commodi consequatur debitis ducimus ea error
                        exercitationem, harum incidunt, inventore maxime molestiae nam nesciunt nostrum porro quae
                        quaerat
                        quam quasi quia ratione reprehenderit sequi similique unde vero vitae voluptas, voluptate
                        voluptatum. Beatae itaque laborum nostrum officiis. Beatae blanditiis commodi consequatur
                        debitis ducimus ea error exercitationem, harum incidunt, inventore maxime molestiae nam nesciunt
                        nostrum porro quae quaerat quam quasi quia ratione reprehenderit sequi similique unde vero vitae
                        voluptas, voluptate voluptatum.</p>
                    <img src={image1} alt="book" className="sectionImg"/>
                </div>
            </div>
            <Collapsible>
                <div className='test'>
                    <div className='box1'>
                        <p className='section4-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                            beatae
                            consectetur excepturi, expedita laudantium maiores molestias officia sint tempore totam
                            vitae
                            voluptates! Adipisci asperiores beatae consectetur doloribus esse ipsum nam nihil placeat
                            quae,
                            quisquam, quo, quos velit! Aliquam aspernatur beatae commodi labore minus nam necessitatibus
                            quo ut.
                            Alias cupiditate harum iusto maiores recusandae. Dignissimos magnam maiores qui saepe
                            suscipit
                            tempore temporibus vero. Beatae blanditiis commodi consequatur debitis ducimus ea error
                            exercitationem, harum incidunt, inventore maxime molestiae nam nesciunt nostrum porro quae
                            quaerat
                            quam quasi quia ratione reprehenderit sequi similique unde vero vitae voluptas, voluptate
                            voluptatum. Beatae itaque laborum nostrum officiis. Beatae blanditiis commodi consequatur
                            debitis ducimus ea error exercitationem, harum incidunt, inventore maxime molestiae nam
                            nesciunt nostrum porro quae quaerat quam quasi quia ratione reprehenderit sequi similique
                            unde vero vitae voluptas, voluptate voluptatum.</p>
                        <img src={image3} alt="book" className="sectionImg"/>
                    </div>
                </div>
                <div className='test'>
                    <div className='box1'>
                        <p className='section4-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                            beatae
                            consectetur excepturi, expedita laudantium maiores molestias officia sint tempore totam
                            vitae
                            voluptates! Adipisci asperiores beatae consectetur doloribus esse ipsum nam nihil placeat
                            quae,
                            quisquam, quo, quos velit! Aliquam aspernatur beatae commodi labore minus nam necessitatibus
                            quo ut.
                            Alias cupiditate harum iusto maiores recusandae. Dignissimos magnam maiores qui saepe
                            suscipit
                            tempore temporibus vero. Beatae blanditiis commodi consequatur debitis ducimus ea error
                            exercitationem, harum incidunt, inventore maxime molestiae nam nesciunt nostrum porro quae
                            quaerat
                            quam quasi quia ratione reprehenderit sequi similique unde vero vitae voluptas, voluptate
                            voluptatum. Beatae itaque laborum nostrum officiis. Beatae blanditiis commodi consequatur
                            debitis ducimus ea error exercitationem, harum incidunt, inventore maxime molestiae nam
                            nesciunt nostrum porro quae quaerat quam quasi quia ratione reprehenderit sequi similique
                            unde vero vitae voluptas, voluptate voluptatum.</p>
                        <img src={image2} alt="book" className="sectionImg"/>
                    </div>
                </div>
            </Collapsible>

        </div>
    )
};

export default WhatIs;