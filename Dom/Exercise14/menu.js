let cross=document.querySelector(".cross");
let circle=document.querySelector(".circle");

cross.addEventListener("click",e=>{
    console.log("cross");
    window.location.href = `game.html?starter=cross`;
});

circle.addEventListener("click",e=>{
    console.log("circle");
    window.location.href = `game.html?starter=circle`;
});