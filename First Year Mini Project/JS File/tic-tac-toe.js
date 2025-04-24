let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg")
let msgCont = document.querySelector(".msg-container")
let newGame = document.querySelector(".new-game")

let turnO = true; //Player-O

let winPatterns = [
    [0 ,1 ,2],
    [3 ,4 ,5],
    [6 ,7 ,8],
    [0 ,3 ,6],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [0 ,4 ,8],
    [2 ,4 ,6]
]

const reset = () => {
    turnO = true;
    enableBoxes();
    msgCont.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked")
        box.innerHTML="hello!!"
        if(turnO){
            box.innerText="O"
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText= `Congratulations ! Winner is ${winner}`
    msgCont.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let Pattern of winPatterns){
        let pos1val = boxes[Pattern[0]].innerText;
        let pos2val = boxes[Pattern[1]].innerText;
        let pos3val = boxes[Pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner is " , pos1val )
                showWinner(pos1val);
            }
        }
    }
};

newGame.addEventListener("click" , reset);
resetBtn.addEventListener("click",reset)