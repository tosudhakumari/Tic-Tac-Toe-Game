let grid;
let currentPosition = "";
const winningPositon = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let PlayerInfo = document.querySelector(".player");
let gamebtn = document.querySelector(".newgame");
let allBoxes = document.querySelectorAll(".box");

initial();
function initial() {
  currentPosition = "x";
  PlayerInfo.innerText = `current Position is ${currentPosition}`;
  grid = ["", "", "", "", "", "", "", "", ""];
  gamebtn.classList.remove("active");
}

allBoxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    console.log(index);
    handleClick(index);
    switchValue();
    gameOver();
    gameTie();
  });
});

function handleClick(index) {
  if (grid[index] === "") {
    grid[index] = currentPosition;
    allBoxes[index].innerText = currentPosition;
  }
}

function switchValue() {
  if (currentPosition === "x") {
    currentPosition = "o";
  } else {
    currentPosition = "x";
  }
  PlayerInfo.innerText = `current Position is ${currentPosition}`;
  gamebtn.classList.add("active");
}

function gameOver() {
  let answer = "";

  winningPositon.forEach((index) => {
    if (
      (grid[index[0]] !== "" ||
        grid[index[1]] !== "" ||
        grid[index[2]] !== "") &&
      grid[index[0]] === grid[index[1]] &&
      grid[index[1]] === grid[index[2]]
    ) {
      if (grid[index[0]] == "x") {
        answer = "x";
      } else {
        answer = "o";
      }
      allBoxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });

      allBoxes[index[0]].classList.add("win");
      allBoxes[index[1]].classList.add("win");
      allBoxes[index[2]].classList.add("win");
    }
    if (answer !== "") {
      PlayerInfo.innerText = `winner is ${answer}`;
      gamebtn.classList.add("active");
    }
  });
}
gamebtn.addEventListener("click", newGame);
function newGame() {
  currentPosition = "x";
  PlayerInfo.innerText = `current Position is ${currentPosition}`;
  grid = ["", "", "", "", "", "", "", "", ""];
  allBoxes.forEach((box, index) => {
    box.style.pointerEvents = "all";
    box.innerText = "";
    box.classList = `box box${index + 1}`;
  });
  gamebtn.classList.remove("active");
}

function gameTie() {
  let flag = true;
  debugger

  allBoxes.forEach((box) => {
    if (box.innerText === "") {
      flag = false;
    }
  });

  if (flag) {
    PlayerInfo.innerText = `GAME TIES`;
    gamebtn.classList.add("active");
  }
}
