import React, { useState, useCallback } from "react";
import update from "immutability-helper";
import Tile from "./Tile";

import picture1 from "./pictures/1.png";
import picture2 from "./pictures/2.png";
import picture3 from "./pictures/3.png";
import picture4 from "./pictures/4.png";
import picture5 from "./pictures/5.png";
import picture6 from "./pictures/6.png";

const pictures = [
  picture1,
  picture2,
  picture3,
  null,
  picture4,
  picture5,
  picture6,
  null,
];

const win1 = [
  picture1,
  picture2,
  picture3,
  null,
  picture4,
  picture5,
  picture6,
  null,
];

const win2 = [
  null,
  picture1,
  picture2,
  picture3,
  null,
  picture4,
  picture5,
  picture6,
];

const boardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(4, 1fr)",
};

export default () => {
  const [board, setBoard] = useState(pictures);

  function winState() {
    if (board == win1 || board == win2) {
      return "win!";
    } else {
      return "win!";
    }
  }

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = board[dragIndex];
      setBoard(
        update(board, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [board]
  );

  return (
    <>
      <div style={boardStyle}>
        {board.map((picture, index) => (
          <Tile src={picture} moveCard={moveCard} id={index} index={index} />
        ))}
      </div>
      {winState()}
    </>
  );
};
