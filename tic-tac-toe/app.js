let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let newBtn = document.getElementById("new-btn");
let winning = document.querySelector(".winning");
let msg = document.getElementById("message");

let turnO = true;

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
const disableBoxes = () => {
  for (let box of boxes) {
    if (!box.disabled) {
      box.disabled = true;
    }
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations,winner is ${winner} `;
  winning.classList.remove("hide");
};
const checkWinner = () => {
  for (let pattern of winningPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val == pos2Val && pos2Val === pos3Val) {
        disableBoxes();
        showWinner(pos1Val);
      }
    }
  }
};

const resetGame = () => {
  turnO = true;
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    winning.classList.add("hide");
  }
};
boxes.forEach((box) =>
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnO) {
      box.innerText = "O";
    } else {
      box.innerText = "X";
    }
    turnO = !turnO;
    box.disabled = true;
    checkWinner();
  })
);

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
