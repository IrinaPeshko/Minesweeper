function count(current, boardWidth, minesArr, visited, emptyCells, gameEnded) {
  const size = boardWidth*boardWidth
  let newEmptyCells = emptyCells;
  for (let i = 0; i<size;i++){
    let cell = document.getElementById(`${i}`)
    if(cell.classList.contains("gameboard__cell_active")){
      newEmptyCells--;
      if (newEmptyCells===0){
        const popUp = document.querySelector(".minesweeper__pop-up");
        popUp.classList.add("open");
        const text = document.querySelector(".pop-up__text");
        text.innerText = "You are a winner!";
        gameEnded=true;
      }
    }
  }
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
          count(neighborObject, boardWidth, minesArr, visited, emptyCells, gameEnded);
          neighborObject.classList.add("gameboard__cell_active");
        }
      }
    }
  }
}
