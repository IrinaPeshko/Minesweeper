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
        event.target.innerHTML = "OK";
        for (let i = 0; i< minesArr.length; i++){
          let element = document.getElementById(`${minesArr[i]}`)
          element.innerHTML = "OK"
          element.classList.add("gameboard__cell_active");
          }
        } else {
          let current = event.target     
          count(current, boardWidth, minesArr)
      }

    }
  })
  }

  function count(current, boardWidth, minesArr){
    let i = 0;
    let currentId = +current.id;
    if (minesArr.includes(currentId + 1)) {
      i++;
    }
    if (minesArr.includes(currentId - 1)) {
      i++;
    }
    if (minesArr.includes(currentId + boardWidth)) {
      i++;
    }
    if (minesArr.includes(currentId + boardWidth + 1)) {
      i++;
    }
    if (minesArr.includes(currentId + boardWidth - 1)) {
      i++;
    }
    if (minesArr.includes(currentId - boardWidth)) {
      i++;
    }
    if (minesArr.includes(currentId - boardWidth - 1)) {
      i++;
    }
    if (minesArr.includes(currentId - boardWidth + 1)) {
      i++;
    }
    current.innerText = i;
    // currentId % boardWidth !== 0 || currentId === 0;
    if(i === 0){
      // добавить вызов функции для каждой клетки вокруг бомб
      let newId = currentId+1;
      let newObject = document.getElementById(`${newId}`);
      count(newObject, boardWidth, minesArr);
      debugger
      newId = currentId - 1;
      newObject = document.getElementById(`${newId}`);
      count(newObject, boardWidth, minesArr);

      newId = currentId + boardWidth;
      newObject = document.getElementById(`${newId}`);
      count(newObject, boardWidth, minesArr);

      newId = currentId + boardWidth+1;
      newObject = document.getElementById(`${newId}`);
      count(newObject, boardWidth, minesArr);

      newId = currentId + boardWidth-1;
      newObject = document.getElementById(`${newId}`);
      count(newObject, boardWidth, minesArr);

      newId = currentId - boardWidth;
      newObject = document.getElementById(`${newId}`);
      count(newObject, boardWidth, minesArr);

      newId = currentId - boardWidth - 1;
      newObject = document.getElementById(`${newId}`);
      count(newObject, boardWidth, minesArr);

      newId = currentId - boardWidth + 1;
      newObject = document.getElementById(`${newId}`);
      count(newObject, boardWidth, minesArr);
    }
    return i
  }