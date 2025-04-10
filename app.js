let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector(".reset");
let btn = document.querySelector(".box");
let turn0 = true;
let startBtn= document.querySelector(".start-new");
let winningMess = document.querySelector("#winning-message");
let mess= document.querySelector(".message");



const winPattterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0 === true) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    // Function to check

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPattterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 !="" && pos2 !="" && pos3!="") {
        if(pos1 === pos2 && pos2 === pos3) {
            console.log("Winner",pos2);
            disableBoxes();
            showWinner(pos2);
        }
    }
  }
};
const showWinner = (winner) => {
    winningMess.innerText = `Congratulation! Winner is ${winner}`;
    mess.classList.remove("hide");

}

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    mess.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

restBtn.addEventListener("click", () => {
    resetGame();
})

startBtn.addEventListener("click",() => {
    resetGame();
})