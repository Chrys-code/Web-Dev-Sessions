import React from 'react';
import './App.css';
import Header from './Components/Header';
import DaysCompleted from './Components/DaysCompleted';
import Tile from "./Components/Tile";
import Graph from "./Components/Graph";
import ProgressBar from "./Components/ProgressBar";

function App() {
  return (
    <div className="App">
      <Header name={"Jason Momoa"} image={"#"}/>
      <Tile>
        <DaysCompleted days={15} />
        <Graph progress={60} progress1={80} progress2={100} progress3={80} progress4={0}
               progress5={50} progress6={40} progress7={50} progress8={80} progress9={60}/>
        <ProgressBar progressTrack={50}/>
      </Tile>
    </div>
  );
}

export default App;
