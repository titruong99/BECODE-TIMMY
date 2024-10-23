let buttons=document.querySelectorAll("button");
buttons.forEach(elem=>elem.addEventListener("click",e=>{
    if(elem.innerText=="Play"){
        window.location.href = `nameMenu.html`;
    }else{
        self.close();
    }
}))