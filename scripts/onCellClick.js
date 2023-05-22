import { createMines } from "./createMines.js";
import { count } from "./countMinesArraund.js";

export function onCellClick(size) {
  let minesArr;
  let countClicks = 0;
  const boardWidth = Math.sqrt(size)
  const gameBoard = document.querySelector(".gameboard__container");
  let gameEnded = false;
  gameBoard.addEventListener("click", (event) => {
    countClicks++
    if (gameEnded) {
      return;
    }
    if (countClicks === 1){
      minesArr = createMines(size, +event.target.id);
  console.log(minesArr);
    }
    if (event.target.tagName === "BUTTON") {
      event.target.classList.add("gameboard__cell_active");
      if (minesArr.includes(+event.target.id)){
        for (let i = 0; i< minesArr.length; i++){
          let element = document.getElementById(`${minesArr[i]}`)
          element.innerHTML =
            '<img src="./assets/1570429633bomb.svg" alt="bomb" class="cell__bomb">';
          element.classList.add("gameboard__cell_active");
          gameEnded=true;
          }
          const popUp = document.querySelector(".minesweeper__pop-up");
          popUp.classList.add("open");
        } else {
          let current = event.target 
          const visitedCells = new Set();
          const boardWidth = Math.sqrt(size)    
          count(current, boardWidth, minesArr, visitedCells);
      }

    }
  })
  }

  


