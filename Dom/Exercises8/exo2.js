let buttons=document.querySelectorAll("button");
console.log(buttons[1].nextElementSibling);
buttons.forEach(element=>element.addEventListener("click",button=>{
    if(element.innerText=="Open tab"){
        element.nextElementSibling.style.display="block"
        element.innerText="Close tab";
    }else{
        element.nextElementSibling.style.display="none";
        element.innerText="Open tab";
    }
}));