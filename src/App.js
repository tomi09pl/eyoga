import React from 'react';
import logo from './logo.svg';
import './scss/App.scss';
import Header from "./components/header";
import Footer from "./components/footer";
import Slideshow from "./components/Main_Section1_Slideshow";

const Test1 = () => (
      <div>
        <input type="text" placeholder="wpisuj tu text..."/>
        <button>wciskaj buttona!</button>
          <div>a to jest moj tekst ktory bede sobie tutaj pisac!</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at debitis dicta dolor dolorum eius fugit illo inventore libero minima minus nostrum quas, quasi quibusdam quo quos recusandae repellat suscipit.</div>
      </div>
  );

function App() {
  return (
    <div className="App">
        <Header/>
        <Slideshow/>
      <header className="App-header">
          <Test1 />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Footer/>
    </div>
  );
}

export default App;
