import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import './scss/App.scss';

import Main from './components/Main';
import Form from './components/Form';
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
 <div>
  <Router>
      <Header/>
     <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/form" component={Form} />
        <Route component={NotFound}/>
     </Switch>
      <Footer/>
 </Router>
</div>
    );
}

export default App;
