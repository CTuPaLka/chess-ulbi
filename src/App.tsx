import React, { useState, useEffect } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    // при монтировании компонента вызываем функцию инициализации ячеек
    restart();
    // !!! закончил тут. 14:28 на видео
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }

  return (
    <div className="App">
      <BoardComponent />
    </div>
  );
}

export default App;
