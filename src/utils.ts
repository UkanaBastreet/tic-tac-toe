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
