import { createMines } from "./createMines.js";
export function onCellClick(size) {
  let minesArr;
  let countClicks = 0;
  const boardWidth = Math.sqrt(size)
  const gameBoard = document.querySelector(".gameboard__container");
  gameBoard.addEventListener("click", (event) => {
    countClicks++
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
          }
        } else {
          let current = event.target 
          const visitedCells = new Set();
          const boardWidth = Math.sqrt(size)    
          count(current, boardWidth, minesArr, visitedCells);
      }

    }
  })
  }

  function count(current, boardWidth, minesArr, visited) {
    let currentId = +current.id;
    visited.add(currentId);

    let i = 0;
    const directions = [-1, 0, 1];

    for (let dy of directions) {
      for (let dx of directions) {
        if (dx === 0 && dy === 0) continue;
        const neighborId = currentId + dx + dy * boardWidth;

        // Проверяем, является ли текущая ячейка крайней левой ячейкой
        if (currentId % boardWidth === 0 && dx === -1) continue;

        // Проверяем, является ли текущая ячейка крайней правой ячейкой
        if ((currentId + 1) % boardWidth === 0 && dx === 1) continue;

        if (minesArr.includes(neighborId)) i++;
      }
    }

    current.innerText = i;

    if (i === 0) {
      current.innerText = "";
      for (let dy of directions) {
        for (let dx of directions) {
          const neighborId = currentId + dx + dy * boardWidth;
          if (dx === 0 && dy === 0) continue;

          // Проверяем, является ли текущая ячейка крайней левой ячейкой
          if (currentId % boardWidth === 0 && dx === -1) continue;

          // Проверяем, является ли текущая ячейка крайней правой ячейкой
          if ((currentId + 1) % boardWidth === 0 && dx === 1) continue;

          const neighborObject = document.getElementById(`${neighborId}`);
          if (neighborObject && !visited.has(neighborId)) {
            count(neighborObject, boardWidth, minesArr, visited);
            neighborObject.classList.add("gameboard__cell_active");
          }
        }
      }
    }
  }


