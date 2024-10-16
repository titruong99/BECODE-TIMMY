const bold = document.querySelector("b");
bold.closest('body').style.backgroundColor="beige";
bold.style.color="red";
bold.closest("div").style.backgroundColor="darkblue";
bold.closest("div").style.color="white";
bold.parentElement.nextElementSibling.style.color="pink";
let list=Array.from(bold.closest("section").previousElementSibling.querySelector("ul").children);
list.forEach(element =>{
    element.style.color="orange";
    element.children[0].style.color="green";
});
let newText=bold.closest("section").previousElementSibling.querySelector("h1").innerText.toUpperCase();
bold.closest("section").previousElementSibling.querySelector("h1").innerText=newText;
