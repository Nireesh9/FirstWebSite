import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './Components/Header'
import Banner from './Components/Banner'
import Team from './Components/Team'
import TeamDet from './Components/TeamDetails'
function App() {
  return (
    <div className="App">
     <Headers head = "Home "/>
     <Banner/>
    <Headers head = "Our Clients"/>
     <Team/>
     <Headers head = "Our Develpers"/>
     <TeamDet/> 
     <Headers head = "Developed by Nireesh" />
    </div>
  );
}

export default App;
