import React from "react";
import { Race } from "../../types/race";
import HorseRace from "../HorseRace";

interface RacesProps {
  races: Race[];
}

const Races = ({ races }: RacesProps) => {
  return (
    <div>
      <h1>Races</h1>
      {races.map((race, index) => {
        return <HorseRace raceData={race}></HorseRace>;
      })}
    </div>
  );
};

export default Races;
