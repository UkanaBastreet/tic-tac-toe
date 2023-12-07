import React, { FC } from "react";
import { ICell } from "../types";

interface CellComponentProps {
  cell: ICell;
  onClickHandler: (cell: ICell) => void;
}

export const CellComponent: FC<CellComponentProps> = ({
  cell,
  onClickHandler,
}) => {
  return (
    <>
      <div
        onClick={() => onClickHandler(cell)}
        className={"Cell " + cell?.sign}
      >
        {cell.sign}
      </div>
    </>
  );
};
