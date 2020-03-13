import React from 'react';
import {Parallax} from 'react-scroll-parallax';

const Section2 = () => {

    const styleInner = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const x = -35;
    const x2 = 35;
    const x3 = 35;
    const x4 = -35;
    const y = 0;
    const y2 = 0;
    const y3 = 0;
    const y4 = 0;

    return (

        <div className='section2-main'>

            <div className="row first-row">
            <Parallax className="parallax-container" x={[x, x2]} y={[y, y2]} styleInner={styleInner}>
                <div className="infobox">
                    <div><i>MY ICON</i></div>
                    <div>My teXT</div>
                </div>
            </Parallax>

            <Parallax className="parallax-container" x={[x, x2]} y={[y, y2]} styleInner={styleInner}>
                <div className="infobox">
                    <span className="txt">MOJ TEKST2</span>
                </div>
            </Parallax>
            <Parallax className="parallax-container" x={[x, x2]} y={[y, y2]} styleInner={styleInner}>
                <div className="infobox">
                    <span className="txt">MOJ TEKST3</span>
                </div>
            </Parallax>
            </div>

            <div className="row second-row">
            <Parallax className="parallax-container" x={[x3, x4]} y={[y3, y4]} styleInner={styleInner}>
                <div className="infobox">
                    <span className="txt">MOJ TEKST4</span>
                </div>
            </Parallax>
            <Parallax className="parallax-container" x={[x3, x4]} y={[y3, y4]} styleInner={styleInner}>
                <div className="infobox">
                    <span className="txt">MOJ TEKST5</span>
                </div>
            </Parallax>
            <Parallax className="parallax-container" x={[x3, x4]} y={[y3, y4]} styleInner={styleInner}>
                <div className="infobox">
                    <span className="txt">MOJ TEKST6</span>
                </div>
            </Parallax>
            </div>

        </div>

    )
};

export default Section2;