import React from "react";
import "./index.css"
interface ConditionProps {
  going: string;
  totalEntrants: number;
}

const Condition = ({ going, totalEntrants }: ConditionProps) => {
  return (
    <div>
      <div className="going">{`🌱 ${going}`}</div>
      <div className="totalEntrants"><span> {`${totalEntrants}`}</span> Ran</div>
    </div>
  );
};

export default Condition;
