import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Races from "./components/Races";

import raceData from "./data/mock.json";

function App() {
  return (
    <div className="App">
      <Races races={raceData.races}></Races>
    </div>
  );
}

export default App;
