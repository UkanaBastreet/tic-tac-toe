import React, { FC } from "react";

interface CellProps {
  classNames: string;
  sign: "tic" | "tac" | null;
}

export const Cell: FC<CellProps> = ({ classNames, sign }) => {
  return (
    <>
      <div className={"Cell " + classNames}>
        {sign && sign === "tac" ? "x" : "o"}
      </div>
    </>
  );
};
