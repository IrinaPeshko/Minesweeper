// import { createMines } from "./createMines.js";
export function onCellClick(minesArr) {
  const gameBoard = document.querySelector(".gameboard__container");
  console.log(minesArr);
  gameBoard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      event.target.classList.add("gameboard__cell_active");
      if (minesArr.includes(+event.target.id)){
        event.target.innerHTML = "OK"
      console.log(event.target.id);
      } 
    }
  });
}