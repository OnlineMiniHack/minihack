import React from "react";
import { Race } from "../../types/race";
import Condition from "../Condition";
import RaceEntrant from "../RaceEntrant";
import "./index.css";

interface HorseRaceProps {
  raceData: Race;
}

const HorseRace = ({ raceData }: HorseRaceProps) => {
  const { id, location, entrants, going, time } = raceData;

  return (
    <div>
      <div className="location-time-box">
        <h2>{location}</h2>
        <h2>{time}</h2>
      </div>
      {entrants.map((entrant, index) => {
        return (
          <RaceEntrant
            name={entrant.name}
            position={entrant.position}
          ></RaceEntrant>
        );
      })}
      <Condition going={going} totalEntrants={entrants.length}></Condition>
    </div>
  );
};

export default HorseRace;
