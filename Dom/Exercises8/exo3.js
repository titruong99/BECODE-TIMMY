document.querySelector("button").addEventListener("click",element=>{
    let rgb="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
    document.querySelector("body").style.backgroundColor=rgb;
    document.querySelector("h1").innerText=rgb;
});