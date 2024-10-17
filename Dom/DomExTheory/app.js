const mainHeading = document.getElementById("main-heading");
mainHeading.style.color = "red";

// const list = document.querySelector("ul");
// const myList = document.querySelector("ul");
// const myItem = document.createElement("li");

// myList.appendChild(myItem);
// myItem.remove();
const list = document.querySelector("ul");
let firstChild=list.firstElementChild;
let textfirstChild=firstChild.innerText;
let newChild=document.createElement("li")
newChild.innerText=textfirstChild;
list.appendChild(newChild);

Array.from(list.children).forEach(element => {
    element.style.color="purple";
    if(element.innerHTML=="Annie Hall"){
        const newText=element.innerText.replace('Hall', '<span style="color: red;">Hall</span>');
        element.innerHTML=newText;
    }
});

list.lastElementChild.style.color="gold";
// let buttons=document.querySelectorAll("button");
// buttons.forEach(button=>button.addEventListener("click",e=>console.log(e.target)));
document.addEventListener("click", (e) => {
    if (e.target.matches(".parent")) {
        alert("clicked");
      // Handle clicks on the elements with "my-class" class
    }
    if (e.target.matches("li")) {
        alert("li");
      // Handle clicks on all li in the page
    }
    // etc
  });