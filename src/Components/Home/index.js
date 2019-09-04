import React from 'react';
import Headers from '../Header'
import Banner from '../Banner'
import Team from '../Team'
import TeamDet from '../TeamDetails'
import Header1 from'../Header1'
function Home() {
  return (
    <div className="Home">
     <Header1 />
     <Banner/>
    <Headers head = "Our Clients"/>
     <Team/>
     <Headers head = "Our Develpers"/>
     <TeamDet/> 
     <Headers head = "Developed by Nireesh" />
    </div>
  );
}

export default Home;
