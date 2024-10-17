let inputValue="";
let input=document.querySelector(".inputText");
input.addEventListener("change",event=>{
    inputValue=input.value;
    console.log(inputValue);
});