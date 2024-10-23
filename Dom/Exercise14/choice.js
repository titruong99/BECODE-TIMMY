const params = new URLSearchParams(window.location.search);
let nameCrossPlayer=params.get("crossPlayer");
let nameCirclePlayer=params.get("circlePlayer");

let cross=document.querySelector(".cross");
let circle=document.querySelector(".circle");

cross.addEventListener("click",e=>{
    console.log("cross");
    window.location.href = `game.html?starter=cross&crossPlayer=${nameCrossPlayer}&circlePlayer=${nameCirclePlayer}`;
});

circle.addEventListener("click",e=>{
    console.log("circle");
    window.location.href = `game.html?starter=circle&crossPlayer=${nameCrossPlayer}&circlePlayer=${nameCirclePlayer}`;
});