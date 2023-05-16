// import { createMines } from "./createMines.js";
export function onCellClick(minesArr, size) {
  const boardWidth = Math.sqrt(size)
  console.log(boardWidth);
  const gameBoard = document.querySelector(".gameboard__container");
  console.log(minesArr);
  gameBoard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      event.target.classList.add("gameboard__cell_active");
      if (minesArr.includes(+event.target.id)){
        event.target.innerHTML = "OK"
      console.log(event.target.id);
      } else {
        let i = 0;
        if (minesArr.includes(+event.target.id+1)){
          i++
        }
        if (minesArr.includes(+event.target.id - 1)) {
          i++;
        }
        if (minesArr.includes(+event.target.id + boardWidth)) {
          i++;
        }
        if (minesArr.includes(+event.target.id + boardWidth+1)) {
          i++;
        }
        if (minesArr.includes(+event.target.id + boardWidth-1)) {
          i++;
        }
        if (minesArr.includes(+event.target.id - boardWidth)) {
          i++;
        }
        if (minesArr.includes(+event.target.id - boardWidth-1)) {
          i++;
        }
        if (minesArr.includes(+event.target.id - boardWidth + 1)) {
          i++;
        }

        event.target.innerText = i;

      }

    }
  });
}