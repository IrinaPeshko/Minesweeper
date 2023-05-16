export function createMines (size) {
  let minesCount = 0;
  if(size === 100){
    minesCount =10
  } else if(size === 225){
    minesCount = 15
  } else {
    minesCount = 25
  }
  const gameBoard = document.querySelector(".gameboard__container");

  const minesArr = [...Array(size).keys()]
  .sort(() => Math.random() - 0.5)
  .slice(0, minesCount)
  console.log(minesArr);
}