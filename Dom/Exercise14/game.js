const params = new URLSearchParams(window.location.search);
let starter=params.get("starter");
let nameCrossPlayer=params.get("crossPlayer");
let nameCirclePlayer=params.get("circlePlayer");

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let board=["","","","","","","","",""];
let winner="";
let finished=false;
let currentPlayer=starter
let nbPointsCrossPlayer=0;
let nbPointsCirclePlayer=0;

const getCurrentPlayerName=()=>currentPlayer=="cross"?nameCrossPlayer:nameCirclePlayer;

const createCircle=()=>{
    let circle=document.createElement("p");
    circle.style.borderRadius="100px";
    circle.style.border="solid 7px blue";
    circle.style.width="60px";
    circle.style.height="60px";
    return circle;
};

const createCross=()=>{
    let cross=document.createElement("p");
    cross.innerText = "\u274C";
    cross.style.fontSize="50px";
    return cross;
};

const restart=()=>{
    currentPlayer=starter
    cells.forEach(elem=>{
        while(elem.firstChild){
            elem.removeChild(elem.firstChild);
        }
    });
    reloadBoard();
    finished=false;
    message.innerText="Ok, we are back ! You start "+getCurrentPlayerName()+".";
};

const reloadBoard=()=>{
    for(let i=0;i<board.length;i++){
        board[i]="";
    }
}

const boardIsFull=()=>{
    let isFull=true
    cells.forEach(element => {
        isFull=isFull && element.children.length==1;
    });
    return isFull;
}


const checkWinningAlignment = () => {
    winner = "";

    for (let combo of winCombinations) {
        let nbCross = 0;
        let nbCircles = 0;

        for (let index of combo) {
            if (board[index] === "cross") {
                nbCross++;
            } else if (board[index] === "circle") {
                nbCircles++;
            }
        }

        if (nbCross === 3) {
            winner = nameCrossPlayer;
            break;
        } else if (nbCircles === 3) {
            winner = nameCirclePlayer;
            break;
        }
    }
    return winner;
};

let cells= document.querySelectorAll(".cell");
cells.forEach(element =>element.addEventListener("click",e=>{
    if(!finished){
        if(element.children.length==0){
            let symbol=currentPlayer=="cross"?createCross():createCircle();
            board[e.target.getAttribute('data-nb')]=currentPlayer;
            currentPlayer=currentPlayer=="cross"?"circle":"cross";
            element.appendChild(symbol);
            message.innerText="Your turn, "+getCurrentPlayerName()+".";
        }
        checkWinningAlignment();
        if(winner!==""){
            message.innerText=`Congratulations, ${winner}! You are the winner !`;
            if(winner==nameCrossPlayer){
                nbPointsCrossPlayer++;
                pointsCrossPlayer.innerText=nbPointsCrossPlayer;
            }else{
                nbPointsCirclePlayer++;
                pointsCirclePlayer.innerText=nbPointsCirclePlayer;
            }
            finished=true;
        }else if(boardIsFull()){
            message.innerText="The game is finished ! Nobody won, you losers !";
            finished=true
        }
    }

}));

let button=document.querySelector("button");
button.addEventListener("click",e=>{
    restart();
});

let names=document.querySelectorAll("label");
names[0].innerText=nameCrossPlayer;
names[1].innerText=nameCirclePlayer;
let paragraphs=document.querySelectorAll("p");
let message=paragraphs[paragraphs.length-1];
let pointsCrossPlayer=paragraphs[0];
let pointsCirclePlayer=paragraphs[1];
message.innerText="Welcome players! You start "+getCurrentPlayerName()+".";
