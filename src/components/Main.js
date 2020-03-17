import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import '../scss/App.scss';

import Header from "./Header";
import Footer from "./Footer";
import Slideshow from "./Main_Section1_Slideshow";
import Section2 from "./Main_Section2_Infoboxes";
import ExPlanAd from "./Main_Section3_CreateExercisePlanAd";
import WhatIs from "./Main_Section4_WhatIs";

import {ParallaxProvider} from 'react-scroll-parallax';

function Main() {
    return (
        <ParallaxProvider>
            <div className="Main">
                <Slideshow/>
                <Section2/>
                <WhatIs/>
                <ExPlanAd/>
            </div>
        </ParallaxProvider>
    );
}

export default Main;
