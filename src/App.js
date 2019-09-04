import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from'./Components/Home/index';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Login from './Components/Login'

function App() {
  return (
    // <div className="App">
    //  <Headers head = "Home "/>
    //  <Banner/>
    // <Headers head = "Our Clients"/>
    //  <Team/>
    //  <Headers head = "Our Develpers"/>
    //  <TeamDet/> 
    //  <Headers head = "Developed by Nireesh" />
    // </div>
    <Router>
    <div className = "App">
      <Route exact path = '/' component = {Home}/>
      <Route path = '/Login' component = {Login}/>

    </div>
    </Router>
  );
}

export default App;
