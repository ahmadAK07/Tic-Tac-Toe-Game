document.addEventListener("DOMContentLoaded", () => {

let boxes = document.querySelectorAll(".box");
let turnO = true;
let msgContainer = document.querySelector(".msg-container ");
let msg = document.querySelector("#msg");
let button = document.querySelector('#reset');

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetbutton = () => {
  turnO = true;
  msgContainer.classList.add("hide");
  enableboxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box clicked");
    
    if(turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    };
    box.disabled = true;

    checkwinner();
    
  });

});

const disableboxes = () => {
  for(let box of boxes) {
    box.disabled = true;
  
  }
};

const enableboxes = () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showwinner = (winner) => {
  msg.innerText = `"Congratulation", Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
};


const checkwinner = () => {
  for( let pattern of winpattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if(pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner",pos1Val); 
        
        showwinner(pos1Val);
      }
    }
  }
};

button.addEventListener("click", resetbutton);

});


