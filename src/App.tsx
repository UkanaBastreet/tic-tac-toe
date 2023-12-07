import { useState, useEffect } from "react";
import "./App.css";
import { ICell } from "./types";
import {
  checkDiagonal,
  checkHorizontal,
  checkVertical,
  createCellsArray,
} from "./utils";
import { Field } from "./components/Field";

function App() {
  const [cells, setCells] = useState<ICell[][]>([]);
  const [player, setPlayer] = useState(false);

  useEffect(() => {
    restart();
  }, []);

  useEffect(() => {
    if (
      checkHorizontal(cells) ||
      checkVertical(cells) ||
      checkDiagonal(cells)
    ) {
      restart();
    }
  }, [cells]);

  function restart() {
    let newCells = createCellsArray();
    setCells(newCells);
  }

  function onClickHandler(cell: ICell) {
    let newCells = cells.map((row) => {
      row.forEach((c) => {
        if (c.id === cell.id) {
          c.sign = c.sign === null ? (player ? "◯" : "✖") : c.sign;
        }
      });
      return row;
    });
    setCells(newCells);
    setPlayer((p) => !p);
  }
  return (
    <div className="App">
      <Field onClickHandler={onClickHandler} cells={cells} />
    </div>
  );
}

export default App;
