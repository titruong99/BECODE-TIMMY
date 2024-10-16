let parent=document.querySelector("div");
let pointsPlayer1=0;
let pointsPlayer2=0;
let colorPlayer1="black";
let colorPlayer2="black";
parent.addEventListener("click",event=>{
    if(event.target.matches(".Restart")){
        pointsPlayer1=0;
        pointsPlayer2=0;
        colorPlayer1="black";
        colorPlayer2="black";
        document.querySelector("h2").style.display="none";
    }
    if(pointsPlayer1+pointsPlayer2<5){
        if(event.target.matches(".AddPoint")){
            event.target.innerText==="+1 Player One"?pointsPlayer1++:pointsPlayer2++;
            if(pointsPlayer1+pointsPlayer2===5){
                colorPlayer1=pointsPlayer1>pointsPlayer2?"green":"red";
                colorPlayer2=pointsPlayer2>pointsPlayer1?"green":"red";
            }
            document.querySelector("h2").innerHTML=`<span style="color: ${colorPlayer1};">${pointsPlayer1}</span> to <span style="color: ${colorPlayer2};">${pointsPlayer2}`;
            document.querySelector("h2").style.display="block";
        }
    }
});