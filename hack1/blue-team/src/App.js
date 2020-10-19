import React from "react";
import Board from "./Board.jsx";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <header className="App-header">
          <Board />
        </header>
      </DndProvider>
    </div>
  );
}

export default App;
