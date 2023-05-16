export function createMines (size, firstCell) {
  let minesCount = 0;
  if(size === 100){
    minesCount =10
  } else if(size === 225){
    minesCount = 15
  } else {
    minesCount = 25
  }
  const gameBoard = document.querySelector(".gameboard__container");

  const cellArr = [...Array(size).keys()];
  cellArr.splice(firstCell, 1);
  cellArr.sort(() => Math.random() - 0.5);
  const minesArr = cellArr.slice(0, minesCount);
  return minesArr;
}