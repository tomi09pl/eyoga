import React from 'react';
import {Parallax} from 'react-scroll-parallax';

import { ScrollTo } from "react-scroll-to";
import {Link} from "react-router-dom";

const goToTop = () => {
    document.documentElement.scrollTop = 0
};

const Section2 = () => {

    const styleInner = {
        // height: '100vh',
        // width: '100%',
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
                    <i className="fas fa-book-reader"></i>
                    <div className="infobox-txt">
                        <h3>What is Eyes Yoga?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <ScrollTo>
                            {({scroll}) => (
                                <a onClick={() => scroll({x:0,y:1172,smooth:true})}><i className="fas fa-info"></i> Show me more</a>
                            )}
                        </ScrollTo>
                    </div>
                </div>
            </Parallax>

            <Parallax className="parallax-container" x={[x, x2]} y={[y, y2]} styleInner={styleInner}>
                <div className="infobox">
                    <i className="fas fa-eye"></i>
                    <div className="infobox-txt">
                        <h3>Check your vision</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <a href="#"><i className="fas fa-info"></i> Show me more</a>
                    </div>
                </div>
            </Parallax>
            <Parallax className="parallax-container" x={[x, x2]} y={[y, y2]} styleInner={styleInner}>
                <div className="infobox">
                    <i className="fas fa-couch"></i>
                    <div className="infobox-txt">
                        <h3>Relaxation Techniques</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <a href="#"><i className="fas fa-info"></i> Show me more</a>
                    </div>
                </div>
            </Parallax>
            </div>

            <div className="row second-row">
            <Parallax className="parallax-container" x={[x3, x4]} y={[y3, y4]} styleInner={styleInner}>
                <div className="infobox">
                    <i className="fas fa-hourglass-start"></i>
                    <div className="infobox-txt">
                        <h3>Basic Exercises</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <a href="#"><i className="fas fa-info"></i> Show me more</a>
                    </div>
                </div>
            </Parallax>
            <Parallax className="parallax-container" x={[x3, x4]} y={[y3, y4]} styleInner={styleInner}>
                <div className="infobox">
                    <i className="fas fa-clipboard-list"></i>
                    <div className="infobox-txt">
                        <h3>Exercise Planner</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <Link to='/form' ><a href="#" onClick={goToTop}><i className="fas fa-info"></i> Show me more</a></Link>
                    </div>
                </div>
            </Parallax>
            <Parallax className="parallax-container" x={[x3, x4]} y={[y3, y4]} styleInner={styleInner}>
                <div className="infobox">
                    <i className="fas fa-shopping-basket"></i>
                    <div className="infobox-txt">
                        <h3>Shop</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <a href="#"><i className="fas fa-info"></i> Show me more</a>
                    </div>
                </div>
            </Parallax>
            </div>

        </div>

    )
};

export default Section2;