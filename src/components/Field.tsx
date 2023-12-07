import { FC } from "react";
import "./Field.css";
import { ICell } from "../types";
import { CellComponent } from "./CellComponent";

interface FieldProps {
  cells: ICell[][];
  onClickHandler: (cell: ICell) => void;
}

export const Field: FC<FieldProps> = ({ cells, onClickHandler }) => {
  return (
    <>
      <div className={"Field"}>
        {cells.map((row, i) => {
          return (
            <div key={i} className="row">
              {row.map((cell) => (
                <CellComponent
                  onClickHandler={onClickHandler}
                  key={cell.id}
                  cell={cell}
                />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};
