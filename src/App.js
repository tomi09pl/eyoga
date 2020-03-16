import React from 'react';
import './scss/App.scss';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Slideshow from "./components/Main_Section1_Slideshow";
import Section2 from "./components/Main_Section2_Infoboxes";
import ExPlanAd from "./components/Main_Section3_CreateExercisePlanAd";
import WhatIs from "./components/Main_Section4_WhatIs";

import {ParallaxProvider} from 'react-scroll-parallax';

function App() {
    return (
        <ParallaxProvider>
            <div className="App">
                <Header/>
                <Slideshow/>
                <Section2/>
                <WhatIs/>
                <ExPlanAd/>
                <Footer/>
            </div>
        </ParallaxProvider>
    );
}

export default App;
