import React from "react";
import { Entrant } from "../../types/race";
import "./index.css";

const medals = ["🥇", "🥈", "🥉"];

const RaceEntrant = ({ name, position }: Entrant) => {
  return (
    <div className="race-entrant">
      {medals[position - 1] ? (
        <div className="race-entrant-container">
          <div className="medal">{medals[position - 1]}</div>
          <div className="name">{name}</div>
        </div>
      ) : (
        <div className="race-entrant-container">
          <div className="position">{position}</div>
          <div className="name">{name}</div>
        </div>
      )}
    </div>
  );
};

export default RaceEntrant;
