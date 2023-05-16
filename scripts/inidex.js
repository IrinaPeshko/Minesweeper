import { createMines } from "./createMines.js";
import { onCellClick } from "./onCellClick.js";
const body = document.querySelector(".body");

const container = document.createElement("div");
container.className = "minesweeper__container";

const header = document.createElement("header");

const header1 = document.createElement("h1");
header1.className = "minesweeper__header";
header1.innerText = "RSS Minesweeper";

const main = document.createElement("main");
main.className = "minesweeper__gameboard";

const gameboard = document.createElement("div");
gameboard.className = "gameboard__container";

const footer = document.createElement("footer");
footer.className = "minesweeper__menu";

const labelSound = document.createElement("label");
labelSound.innerText = "Sound"

const inputSoound = document.createElement('select')
inputSoound.className = "menu__select";
inputSoound.setAttribute("name", "sound");
inputSoound.setAttribute("id", "sound");
inputSoound.setAttribute('for', labelSound.id);

const optionSoundOff  = document.createElement("option");
optionSoundOff.innerText = "off";
optionSoundOff.setAttribute("value", "sound_off");

const optionSoundOn = document.createElement("option");
optionSoundOn.innerText = "on";
optionSoundOn.setAttribute("value", "sound_on");

const labelSize = document.createElement("label");
labelSize.innerText = "Size";

const inputSize = document.createElement("select");
inputSize.className = "menu__select";
inputSize.setAttribute("name", "size");
inputSize.setAttribute("id", "size");
inputSize.setAttribute("for", labelSize.id);

const optionSizeEasy = document.createElement("option");
optionSizeEasy.innerText = "Easy";
optionSizeEasy.setAttribute("value", "100");

const optionSizeMedium = document.createElement("option");
optionSizeMedium.innerText = "Medium";
optionSizeMedium.setAttribute("value", "225");

const optionSizeHard = document.createElement("option");
optionSizeHard.innerText = "Hard";
optionSizeHard.setAttribute("value", "625");


class Minesweeper {
  constructor() {
    this.size = localStorage.size ? localStorage.size : 100;
    this.createGameboard = () => {
      body.prepend(container);
      container.append(header);
      header.append(header1);
      container.append(main);
      container.append(footer);
      main.append(gameboard);
      footer.append(labelSound);
      footer.append(inputSoound);
      inputSoound.append(optionSoundOff);
      inputSoound.append(optionSoundOn);
      footer.append(labelSize);
      footer.append(inputSize);
      inputSize.append(optionSizeEasy);
      inputSize.append(optionSizeMedium);
      inputSize.append(optionSizeHard);
    };
    this.createCells = () => {
      for(let i = 0; i<this.size;i++){
        const cell = document.createElement("button");
        cell.className = "gameboard__cell";
        cell.setAttribute("id", i)
        gameboard.append(cell);
      }
    }
  }
}

const minesweeperPlay = new Minesweeper();
let size = minesweeperPlay.size;
minesweeperPlay.createGameboard();
minesweeperPlay.createCells();
onCellClick(size);