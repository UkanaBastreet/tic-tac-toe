import { ICell } from "./types";

export function createCellsArray(h = 3, w = h): ICell[][] {
  let arr: ICell[][] = [];
  for (let i = 0; i < h; i++) {
    let row: ICell[] = [];
    for (let l = 0; l < w; l++) {
      row.push({
        id: +(i + "" + l),
        sign: null,
      });
    }
    arr.push(row);
  }
  return arr;
}

export function checkHorizontal(cells: ICell[][]) {
  if (cells.length === 0) return false;
  let res = false;
  cells.forEach((row) => {
    if (res) return;
    if (
      row[0].sign !== null &&
      row[0].sign === row[1].sign &&
      row[1].sign === row[2].sign
    ) {
      res = true;
    }
  });
  return res;
}

export function checkVertical(cells: ICell[][]) {
  if (cells.length === 0) return false;
  let res = false;
  cells.forEach((row, i) => {
    if (res) return;
    if (
      cells[0][i].sign !== null &&
      cells[0][i].sign === cells[1][i].sign &&
      cells[1][i].sign === cells[2][i].sign
    ) {
      res = true;
    }
  });
  return res;
}

export function checkDiagonal(cells: ICell[][]) {
  if (cells.length === 0) return false;

  if (
    (cells[1][1].sign !== null &&
      cells[0][0].sign === cells[1][1].sign &&
      cells[1][1].sign === cells[2][2].sign) ||
    (cells[1][1].sign !== null &&
      cells[0][2].sign === cells[1][1].sign &&
      cells[1][1].sign === cells[2][0].sign)
  ) {
    return true;
  }

  return false;
}
